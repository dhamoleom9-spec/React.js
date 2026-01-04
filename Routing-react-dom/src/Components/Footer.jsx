import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const rout = useNavigate()
  return (
    <div className='footer'>
      <h2>bas zala atta bhau</h2>
      <button onClick={()=>rout('/home')}>GO home</button>
    </div>
  )
}

export default Footer
