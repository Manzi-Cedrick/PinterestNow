import React from 'react'

function SignUp() {
  return (
    <div className="flex">
      <label>Username</label>
      <input type="text" placeholder="Enter your Name"/>
      <label>Email</label>
      <input type="email" placeholder="Enter your email"/>
      <label>Username</label>
      <input type="password" placeholder="Enter your password"/>
    </div>
  )
}

export default SignUp