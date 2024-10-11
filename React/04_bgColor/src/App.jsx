import { useState } from 'react'

function App() {
 const [color, setColor] = useState('olive')

  return (
    
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white'>
            <button className='outline-none px-4' style={{backgroundColor: 'red'}}>Red</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
