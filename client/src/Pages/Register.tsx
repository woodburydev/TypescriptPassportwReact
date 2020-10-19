import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';

export default function Register() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const register = () => {
    axios.post("http://localhost:4000/register", {
      username,
      password
    }, {
      withCredentials: true
    }).then((res : AxiosResponse) => {
      if (res.data === "success") {
       window.location.href = "/login"
     }
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)}/>
      <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Login</button>
    </div>
  )
}
