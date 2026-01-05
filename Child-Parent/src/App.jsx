import React, { useState } from 'react'
import Section from './components/Section'

const App = () => {

  const [theam, settheam] = useState('dark')

  const changeTheam = (first)=>{
    settheam(first)
  }

  return (
    <div className='container'>
      <h1>The theam is <span>{theam}</span></h1>
      <Section changetheam={changeTheam}/>
    </div>
  )
}

export default App
