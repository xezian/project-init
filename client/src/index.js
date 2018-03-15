// Import required packages and components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

// Render App component from App.js
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
