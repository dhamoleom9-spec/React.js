import React from 'react'
import { Link, NavLink } from 'react-router-dom'

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
                <NavLink to='/about'
                //     style={({ isAcive }) =>
                //     ({color: isAcive ? 'red' : 'white'})
                // }
                >About</NavLink>
                <NavLink to='/home'
                //     style={({ isAcive }) =>
                //     ({color: isAcive ? 'red' : 'white'})
                // }
                >Home</NavLink>
                <NavLink to='/courses'
                //     style={({ isAcive }) =>
                //     ({color: isAcive ? 'red' : 'white'})
                // }
                >Corsses</NavLink>
            </div>
        </div>
    )
}

export default Nav
