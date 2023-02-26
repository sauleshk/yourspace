import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import authHook from '../../hooks/auth.hook';

import "./Header.scss"

const Header = () => {

    const { getMe, googleLogin } = authHook();
    const {user} = useSelector(state => state.user)
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            googleLogin();
        }
    },[])
    console.log(user, "user");

    // const token = localStorage.getItem("token")
    
    // console.log(token);
  return (
    <div className='header'>
        <div className='logo'>
            <span>YOURS</span>
            <span className='pop'>PACE</span>
        </div>
        <div className='nav'>
            <nav>
                {/* {token ? <div>{user.displayName}</div>: <div>null</div>} */}
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><a href="#About">About us </a></li>
                
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