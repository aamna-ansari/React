import React, { useState } from 'react';
import Header from "./Components/Header";

// export const App = () => {
//   const [username, setUsername] = useState(''); // username = ''

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(username);
//     setUsername(''); // Clears the input field after submission
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           className="px-4 py-4 rounded m-5 text-black"
//           type="text"
//           placeholder="Enter Your Name"
//           value = {username} // Bind input value to the state
//           onChange={(e) => setUsername(e.target.value)} // Update state on input change
//         />
//         <button className="px-4 py-4 m-3 rounded text-2xl bg-gray-400" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// COMPONTENTS

export const App = () => {
    return (
      <>
      
      <nav className='bg-emerald-950 flex items-center justify-between py-4 px-2'>
      <h1 className='text-2xl'>AaMna</h1>
      <div className='flex items-center gap-10'>
        <h4 className='text-xl'>About</h4>
        <h4 className='text-xl'>Contact</h4>
        <h4 className='text-xl'>Services</h4>
        <h4 className='text-xl'>Account</h4>
      </div>
    </nav>
    <Header/>
      </>
    );
      
      
  };



export default App;
