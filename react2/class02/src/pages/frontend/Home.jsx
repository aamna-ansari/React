import React from 'react'
import Button from '../../components/Button'

const Home = () => {
  return (
    <main> 
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='py-5'>
              <h1 className='mb-0 text-center'>This is Learning React Home Page with Bootstrap </h1>
              <div className='p-5'>
              <Button type="primary" text = 'primary' /> 
              <Button type="danger" text = 'danger' /> 
              <Button type="success" text = 'success' /> 
              <Button/> 
              {/* <button className='btn btn-light'>light button</button> */} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home