import React from 'react'
// import Top from './Top'
// import Bottom from './Botton'
import { RiInstagramLine,RiTwitterLine,RiAtLine } from '@remixicon/react'


const card = (props) => {
  return (
    <div className='card'>
      <div className='top'>
        <img src={props.bgimg} alt="" />
        <div className="imc">
          <img src={props.image} alt="" />
        </div>
      </div>
      <div className='bottom'>
        <div className="text">
          <h2>{props.namee}</h2>
          <p>{props.role}</p>
        </div>
        <div className="cont">
          <div className="like">
            <h2>{props.like}</h2>
            <h3>Likes</h3>
          </div>
          <div className="posts">
            <h2>{props.posts}</h2>
            <h3>posts</h3>
          </div>
          <div className="views">
            <h2>{props.views}</h2>
            <h3>Views</h3>
          </div>
        </div>
        <div className="icons">
          <RiInstagramLine />
          <RiTwitterLine />
          <RiAtLine />
        </div>
      </div>
    </div>
  )
}

export default card
