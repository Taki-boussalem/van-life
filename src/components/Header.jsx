import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from "/public/logog.png";

function Header() {
  return (
    <nav>
        <NavLink className='nav-logo' to="/">
          <img src={logoImg}/>
        </NavLink>
        <div>
          <NavLink to="host" className={({isActive}) => isActive ? "active-link" : null}>Host</NavLink>
          <NavLink to="about" className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
          <NavLink to="vans" className={({isActive}) => isActive ? "active-link" : null}>Van</NavLink>
        </div>
    </nav>
  )
}

export default Header