#!/usr/bin/env node
// by nic - 2017 –– 10 locs pra você não precisar dar eject

const fs      = require('fs'),
      file    = require('path').resolve('./node_modules/babel-preset-react-app/index.js'),
      texts   = fs.readFileSync(file, 'utf8'),
      plugin  = 'babel-plugin-relay',
      pattern = 'const plugins = [';

if (!texts.includes(pattern)) throw new Error(`Failed to inject babel-plugin-relay.`);

if (!texts.includes(plugin))
  fs.writeFileSync(file, texts.replace(pattern, `${pattern}\n  require.resolve('${plugin}'),`), 'utf8');