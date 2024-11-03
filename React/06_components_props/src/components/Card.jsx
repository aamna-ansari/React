import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded'>
        <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.profile_photo} alt="Profile" />
        <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
        <h2>{props.profession}</h2>
        <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium' >Add Friend</button>
    </div>
    </>
  )
}

export default Card