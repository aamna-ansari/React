import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/frontend/Home'
import About from './pages/frontend/About'
import Contact from './pages/frontend/Contact'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
      </>
  )
}

export default App
