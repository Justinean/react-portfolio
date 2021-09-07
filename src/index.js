import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (!window.location.href.endsWith("/")) {
  window.location.href = "/react-portfolio";
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);