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
    <Header/>
      </>
    );
  };



export default App;
