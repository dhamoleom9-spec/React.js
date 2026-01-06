import React, { useContext } from 'react'
import UserContext from '../UserContext'

const Nave = () => {
    const data = useContext(UserContext) 
  return (
    <div className='nav flex'>
      <h1>welcome {data} </h1>
    </div>
  )
}

export default Nave
