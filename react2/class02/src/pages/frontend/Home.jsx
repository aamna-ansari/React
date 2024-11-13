import React from 'react'

const Home = () => {
  return (
    <main> 
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='py-5'>
              <h1 className='mb-0 text-center'>This is Learning React Home Page with Bootstrap </h1>
              <div className='p-5'>
              <button className='btn btn-primary '>primary button</button>
              <button className='btn btn-secondary'>secondary button</button>
              <button className='btn btn-success'>success button</button>
              <button className='btn btn-danger'>danger button</button>
              <button className='btn btn-warning'>warning button</button>
              <button className='btn btn-info'>info button</button>
              <button className='btn btn-dark'>dark button</button>
              <button className='btn btn-light'>light button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home