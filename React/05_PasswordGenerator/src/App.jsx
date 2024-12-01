import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password,setPassword] = useState('')
  const [charAllowed , setCharAllowed] = useState(false)
  const [numberAllowed , setNumberAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '$%*(){}+&!^*'

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      
    }
  }, [length, charAllowed, numberAllowed, setPassword])
  return (
    <>
      <h1 className='text-4xl text-center' >Password Generator</h1>
    </>
  )
}

export default App
