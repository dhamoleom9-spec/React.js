import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar' >
            <div className="box">
                <h1>
                    React <br />
                    Route
                </h1>
            </div>
            <div className="box2">
                <Link to='/about'>About</Link>
                <Link to='/home'>Home</Link>
                <Link to='/courses'>Corsses</Link>
            </div>
        </div>
    )
}

export default Nav
