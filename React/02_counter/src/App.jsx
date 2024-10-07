import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 5
  return (
    <>
      <h1>AaMna AnSari </h1>
      <h2>Counter Value: {counter}</h2>
      <button>Add Value: {counter}</button>
      <button>Delete Value:{counter}</button>
    </>
  )
}

export default App
