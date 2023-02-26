import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
        <h1>Register</h1>

        <p>
            Already have account <Link to="/login">sing in</Link>
        </p>
    </div>
  )
}

export default RegisterPage