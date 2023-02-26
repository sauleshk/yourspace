import React from 'react'

import "./Header.scss"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <span>YOURS</span>
            <span className='pop'>PACE</span>
        </div>
        <div className='nav'>
            <nav>
            <ul>
                <li><a href="#opop"> Home </a></li>
                <li><a href="#popo">About us </a></li>
                
                <li>Your problem</li>
                <li>Talk to us</li>
            </ul>
            </nav>
        </div>
        <div className='login'>

            <button><a href="#lolo">LogIn</a></button>
        </div>
    </div>
  )
}

export default Header