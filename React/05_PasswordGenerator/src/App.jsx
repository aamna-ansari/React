import { useCallback, useState , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password,setPassword] = useState('')
  const [charAllowed , setCharAllowed] = useState(false)
  const [numberAllowed , setNumberAllowed] = useState(false)

  // UseRef Hooks

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '$%*(){}+&!^*'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    
    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])

  const copyPassword = useCallback(() => {}, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center text-white my-3' >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onChange={copyPassword}
          className='bg-blue-700 px-3 py-0.5 shrink-0 text-white' >Copy</button>
        </div>
        <div className=' flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor=""> Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="numberInput"
            defaultChecked= {numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="characterInput"
            defaultChecked= {charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
