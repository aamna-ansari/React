import React from 'react'; //core foundation library
// import ReactDOM from 'react-dom/client'; implimentation on web
// DOM => is tree
import './index.css';
import App from './App';
import Me from './Me' //Create a new Component jusst for practice 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    <Me/>

);

