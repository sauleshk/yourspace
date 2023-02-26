import React from 'react'
import { Link } from 'react-router-dom'

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
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/About'>About us </Link></li>
                
                <li><Link to='/gift'>Gifts</Link></li>
                <li>Talk to us</li>
            </ul>
            </nav>
        </div>
        <div className='login'>

            <button><Link to='/register'>Sign in</Link></button>
        </div>
    </div>
  )
}

export default Header