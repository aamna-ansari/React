import React, { useState } from 'react'

export const App = () => {
const [username, setUsername] = useState('')

const submitHandler = (e)=>{
  e.preventDefault();
  console.log(username);
  setUsername('')
  
}
  return (
    <div >
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input className='px-4 py-4 rounded m-5 text-black  ' type="text" placeholder='Enter Your Name' />
        <button className ='px-4 py-4 m-3 rounded text-2xl bg-gray-400' type="submit">Submit</button>
      </form>
    </div>
  )
} 
export default App
