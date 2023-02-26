import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
        <h1>Login</h1>

        <p>
            or <Link to="/register">redirect</Link>
        </p>
    </div>
  )
}

export default LoginPage