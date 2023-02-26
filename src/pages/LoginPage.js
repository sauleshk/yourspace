import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import authHook from '../hooks/auth.hook';

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
    <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button>SignIn</button>
        </form>
        <button onClick={googleAuth}>Google login</button>
        <p>
            or <Link to="/register">redirect</Link>
        </p>
    </div>
  )
}

export default LoginPage