import React from 'react'
import Home from './Home'
import About from './About'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Frontend = () => {
  return (
    <>
    <Header/>
      <main>
          <Home/>
          <About/>
        </main>
    <Footer/>
    </>
  )
}

export default Frontend