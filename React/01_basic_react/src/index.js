import React from 'react'; //core foundation library
// import ReactDOM from 'react-dom/client'; implimentation on web
// DOM => is tree
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
