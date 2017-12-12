import React from 'react';
import react_logo from '../res/react_logo.svg';
import relay_logo from '../res/relay_logo.svg';

const Header = () =>
  <header className="App-header">
    <img src={react_logo} className="App-logo" alt="logo react" />
    <img src={relay_logo} className="App-logo" alt="logo relay" />
    <h1 className="App-title">Bem-vindo ao React+Relay</h1>
  </header>;

export default Header
