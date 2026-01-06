import React from 'react'
import Nave from './components/Nave'
import Section from './components/Section'
import Footer from './components/Footer'
import UserContext from './UserContext'


const App = () => {
  const name = prompt('enter your name')
  return (
    <div className='main flex'>
      <UserContext.Provider value={name}>
        <Nave/>
        <Section/>
        <Footer/>
      </UserContext.Provider>
    </div>
  )
}

export default App
