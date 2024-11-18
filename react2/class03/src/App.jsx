import React from 'react'
import './App.scss'
import 'bootstrap/dist/js/bootstrap.bundle'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    
    <Routes>
    <Route path= '/' element ={<Contact/>}/>
    <Route path= '/about' element ={<About/>}/>
    </Routes>
    </>
  )
}

export default App
