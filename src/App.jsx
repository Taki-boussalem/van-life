import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Routes, Route, Link } from 'react-router-dom'
import logoImg from '../public/logog.png'
export default function App() {
  return (
    <div className='body'>
      <nav>
        <Link className='nav-logo' to="/">
          <img src={logoImg}/>
        </Link>
        <div>
          <Link to="/about">About</Link>
          <Link>Van</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <footer>
        <p>©2022#VANLIFE</p>
      </footer>
    </div>
  )
}
