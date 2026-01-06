import React, { useContext } from 'react'
import UserContext from '../UserContext'

const Footer = () => {
    const name = useContext(UserContext)
  return (
    <div className='foo flex'>
      <h1>welcome {name}</h1>
    </div>
  )
}

export default Footer
