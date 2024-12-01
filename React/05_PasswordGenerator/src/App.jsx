import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password,setPassword] = useState('')
  const [charAllowed , setCharAllowed] = useState(false)
  const [numberAllowed , setNumberAllowed] = useState(false)

  const passwordGenerator = ()=>{
    
  }
  return (
    <>
      <h1 className='text-4xl text-center' >Password Generator</h1>
    </>
  )
}

export default App
