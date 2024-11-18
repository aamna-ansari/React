import React from 'react'

const Copyright = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='bg-primary py-2'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="mb-0 text-center text-white">
                        &copy; {year}. All Right Reversed
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Copyright