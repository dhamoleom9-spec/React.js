import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Corses from './Components/Corses'
import Nested from './Components/Nested'
import Footer from './Components/Footer'
import NotFound from './Components/NotFound'

const App = () => {
  return (
    <div className='container'>
      <Nav/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/courses' element={<Corses/>}/>
        <Route path='/courses/more' element={<Nested />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

