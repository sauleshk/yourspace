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
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>your problem</li>
                <li>talk to us</li>
            </ul>
        </div>
        <div className='form'>
            <input type="text"  id="elastic" class="search-txt" placeholder='search...' />
        </div>
    </div>
  )
}

export default Header