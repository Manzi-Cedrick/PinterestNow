import React, { useState } from 'react'
import { FaGooglePlay, FaPinterest } from 'react-icons/fa';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function SignUp() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleUser = (event) => {
    setUsername(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const FormDataSubmission = (event) => {
    event.preventDefault()
    console.log(username)
    console.log(email)
    console.log(password)
    const PostData = async ( ) => {
      try {
        const result = await fetch('http://localhost:3500/v1/auth/user/signUp',{
          method : 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          })
        })
        const data = await result.json();
        console.log("The Data is:", data);
        if (data) return navigate('/login');
      } catch (error) {
        console.log("The Error", error)
      }
    }
    PostData();
    setUsername('')
    setPassword('')
    setEmail('')
  }
  return (
    <div className="h-screen w-screen overflow-auto ">
      <img src="https://wallpaperaccess.com/full/339387.jpg" alt="" className="lg:max-h-full lg:max-w-full w-full h-full fixed top-0 bottom-0 left-0 right-0" />
      <div className="bg-white lg:rounded-lg px-20 drop-shadow-sm h-screen lg:max-h-[90vh] m-auto  lg:float-right lg:m-5 lg:max-w-[30vw] md:px-10">
        <div className="text-center pt-2 md:pb-8 pb-12">
          <i><FaPinterest className="text-[8em] md:text-[6em] m-auto " /></i>
          <p>Welcome at Pinterest Community </p>  <p className="text-[10px]"> Welcome Now at pinterest connection. Establish</p>
        </div>
        <form onSubmit={FormDataSubmission}>
          <div className="flex flex-col gap-2 text-left">
            <label className="font-semibold lg:text-[12px]">username</label>
            <input type="text" className="p-4 lg:p-3 drop-shadow-sm bg-slate-50 outline-violet-500 border-none outline-2" value={username} onChange={handleUser} placeholder="Enter your Name" />
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label className="font-semibold lg:text-[12px]">email</label>
            <input type="email" className="p-4 lg:p-3 drop-shadow-sm bg-slate-50 outline-violet-500 border-none outline-2" value={email} onChange={handleEmail} placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label className="font-semibold lg:text-[12px]">password</label>
            <input type="password" className="p-4 lg:p-3 drop-shadow-sm bg-slate-50 outline-violet-500 border-none outline-2" value={password} onChange={handlePassword} placeholder="Enter your password" />
          </div>
          <p className="float-right text-[10px]">Already have account ? <Link to='/login' className="text-red-500">Login Now</Link></p>
          <div className="mt-10">
            <button type="submit" className="hover:bg-white hover:text-red-500 border-solid border-red-500 hover:rounded-lg border-2 duration-700  p-5 bg-red-600 w-full h-full px-20 flex justify-center gap-2 text-white font-bold">
              <FaPinterest className='mt-1' />Signup
            </button>
          </div>
        </form>
        <div className="text-center text-[#0000004a]">
          <span>-or-</span>
        </div>
        <div>
          <button className="p-5 border-green-600 border-solid border-2 w-full h-full px-20 flex justify-center gap-2 text-green-500 font-bold">
            <FaGooglePlay className='text-yellow-500 mt-1' />Login with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp