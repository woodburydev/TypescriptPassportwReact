import React, { useContext } from 'react'
import { myContext } from './Context';

export default function Profile() {
  const ctx = useContext(myContext);

  return (
    <div>
      <h1>Current Logged In User: {ctx.username}</h1>
    </div>
  )
}
