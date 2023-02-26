import React from 'react'
import { Link } from 'react-router-dom'

import styles from './reg.module.scss'

const RegisterPage = () => {
  return (
    <div className={styles.register}>
        <h1>Register</h1>

        <p>
            Already have account <Link to="/login">sing in</Link>
        </p>
    </div>
  )
}

export default RegisterPage