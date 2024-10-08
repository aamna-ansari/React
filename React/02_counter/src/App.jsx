import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 5
  // function for add value
  // const addValue = () => {
  //   counter = counter + 1
  //   setCounter(counter)
  //   console.log('clicked added', counter);


  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }



  const removeValue = () => {
    // counter = counter - 1
    // setCounter(counter)
    // console.log('clicked added', counter);

    if (counter > 0) {
      setCounter(counter - 1);

  }}
  

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
