import React from 'react';
import ReactDOM from 'react-dom';
import './res/index.css';
import App from './App';
import registerServiceWorker from './sw/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
