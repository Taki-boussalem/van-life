import React, { useEffect, useState } from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import Vans from './pages/Vans'
import { Routes, Route, Link } from 'react-router-dom'
import logoImg from '../public/logog.png'
import "./server"

export default function App() {
  
  return (
    <div className='body'>
      <nav>
        <Link className='nav-logo' to="/">
          <img src={logoImg}/>
        </Link>
        <div>
          <Link to="/about">About</Link>
          <Link to="/vans">Van</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
      <footer>
        <p>©2022#VANLIFE</p>
      </footer>
    </div>
  )
}
