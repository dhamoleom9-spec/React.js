import React from 'react'
import { RiInstagramLine, RiTwitterLine, RiAtLine } from '@remixicon/react'

const botton = () => {
  return (

    <div className='bottom'>
      <img src="" alt="" />
      <div className="text">
        <h2>om</h2>
        <p>Product Dessigner who focuses on ssimplicity & usability</p>
      </div>
      <div className="cont">
        <div className="like">
          <h2>72.9K</h2>
          <h3>Likes</h3>
        </div>
        <div className="posts">
          <h2>828</h2>
          <h3>posts</h3>
        </div>
        <div className="views">
          <h2>342.9K</h2>
          <h3>Views</h3>
        </div>
      </div>
      <div className="icons">
        <RiInstagramLine />
        <RiTwitterLine />
        <RiAtLine />
      </div>
    </div>
  )
}

