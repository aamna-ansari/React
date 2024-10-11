import { useState } from 'react'

function App() {
 const [color, setColor] = useState('olive')

  return (
    
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex felx-wrap justify-center top-20 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('red')}  className='outline-none px-8 py-1 rounded-full text-white' style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={() => setColor('green')} className='outline-none px-6 py-1 rounded-full text-white' style={{backgroundColor: 'green'}}>Green</button>
            <button onClick={() => setColor('navy')} className='outline-none px-8 py-1 rounded-full text-white' style={{backgroundColor: 'navy'}}>Navy</button>
            <button onClick={() => setColor('deeppink')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: 'deeppink'}}>Deeppink</button>
            <button onClick={() => setColor('skyblue')} className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor: 'skyblue'}}>Skyblue</button>
            <button onClick={() => setColor('black')} className='outline-none px-6 py-1 rounded-full text-white' style={{backgroundColor: 'black'}}>Black</button>
            <button onClick={() => setColor('maroon')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: 'maroon'}}>Maroon</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
