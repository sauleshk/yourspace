import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import authHook from '../hooks/auth.hook';

import styles from './reg.module.scss'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { emailPasswordAuth, googleAuth } = authHook();

  const onSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      emailPasswordAuth(email, password)
    }
  }
  return (
    <div className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button>SignIn</button>
        </form>
        <div className={styles.login_bottom}>
          <img onClick={googleAuth} src='https://agro-sfera.com/wp-content/uploads/2021/04/google.png' alt='google'/>
          <span>
              or <Link to="/register">redirect</Link>
          </span>
        </div>
    </div>
  )
}

export default LoginPage