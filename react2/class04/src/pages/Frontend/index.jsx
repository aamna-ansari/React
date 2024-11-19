import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import About from './About'

const Frontend = () => {
  return (
    <>
    <Header/>
      <main>
        <Routes>
          <Route path = '/'  element = {<Home/>}/>
          <Route path = 'about'  element = {<About/>}/>
          <Route path = '*'  element = {<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
        </main>
    <Footer/>
    </>
  )
}

export default Frontend