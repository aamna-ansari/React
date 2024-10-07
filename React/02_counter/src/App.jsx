import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  // function for add value
  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log('clicked added', counter);
  }
  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
    console.log('clicked added', counter);
  }
  

  return (
    <>
      <h1>AaMna AnSari </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <button onClick={removeValue}>Delete Value:{counter}</button>
    </>
  )
}

export default App
