import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/aamna-ansari')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
            
    //     })

    // }, [])

  return (
    <div className='text-center m-4 p-4 text-black flex justify-center items-center flex-col '>
        Github Followers: {data.followers}
        <img className='h-40 mt-7 p-5 shadow-2xl rounded-full' src={data.avatar_url} alt="github avatar" />
        </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/aamna-ansari')
    return response.json()
}