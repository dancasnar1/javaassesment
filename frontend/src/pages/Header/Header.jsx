import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Head'>
      <h1 className='mainTitle'>DANIEL JAVA ASSESMENT</h1>
      <Link to="/"><button>Home</button></Link>
    </div>
  )
}

export default Header