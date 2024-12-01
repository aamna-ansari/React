import React from 'react'

const Header = () => {
  return (
    <nav className='bg-emerald-950 flex items-center justify-between py-4 px-2'>
      <h1 className='text-2xl'>AaMna</h1>
      <div className='flex items-center gap-10'>
        <h4 className='text-xl'>About</h4>
        <h4 className='text-xl'>Contact</h4>
        <h4 className='text-xl'>Services</h4>
        <h4 className='text-xl'>Account</h4>
      </div>
    </nav>
  )
}

export default Header