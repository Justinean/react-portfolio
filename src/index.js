import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (!window.location.href.endsWith("/")) {
  if (window.location.origin === "https://justinean.github.io") {
    window.location.href = "/react-portfolio";
  } else {
    window.location.href = "/"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);