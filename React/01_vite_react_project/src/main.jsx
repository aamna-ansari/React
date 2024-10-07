import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// Create React element

// let anotherElement = React.createElement(
//  'a',
//  {href: 'https://google.com', target: '_blank'
// },
//  'Click me to visit google'
// )

createRoot(document.getElementById('root')).render(
  // anotherElement
  <App/>
)

