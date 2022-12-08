import React from 'react'
import Trollface from '../images/troll_face.png'

export default function Navbar() {
  return (
    <nav className="navbar-container">
        <div className="logo-section">
            <img src={Trollface} alt="" />
            <h1>Meme Generator</h1>
        </div>
        <h2>React Course - Project 3</h2>
    </nav>
  )
}
