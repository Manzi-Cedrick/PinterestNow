import React,{useState} from 'react'
import { FaGooglePlay, FaPinterest } from 'react-icons/fa';
// import axios from 'axios';
import {  Link } from 'react-router-dom';
function SignUp() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const navigate = useNavigate();
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
    // const PostData = async () => {
    //   const result = await axios.post('http://localhost:8080/v1/auth/user/signup',{
    //     body: JSON.stringify({
    //       username: username,
    //       email: email,
    //       password: password
    //     })
    //   })
    //   const data = await result.json();
    //   if(data) return navigate('/login');
    // }
    // PostData();
    setUsername('')
    setPassword('')
    setEmail('')
  }
  return (
    <div className="h-screen w-screen">
      <img src="" alt="" />
      <div className="bg-white px-20 drop-shadow-sm h-screen w-full md:m-auto md:w-[80vw] md:px-10">     
      <div className="text-center pt-2 pb-12">
        <i><FaPinterest className="text-[8em] m-auto "/></i>
        <p>Welcome at Pinterest Community </p>  <p className="text-[10px]"> Welcome Now at pinterest connection. Establish</p>
      </div>
      <form onSubmit={FormDataSubmission}>
      <div className="flex flex-col gap-2 text-left">
      <label className="font-semibold">username</label>
      <input type="text" className="p-4 drop-shadow-sm bg-slate-50 outline-violet-500 border-none outline-2" value={username} onChange={handleUser} placeholder="Enter your Name"/>
      </div>
      <div className="flex flex-col gap-2 text-left">
      <label className="font-semibold">email</label>
      <input type="email" className="p-4 drop-shadow-sm bg-slate-50 outline-violet-500 border-none outline-2" value={email} onChange={handleEmail} placeholder="Enter your email"/>
      </div>
      <div className="flex flex-col gap-2 text-left">
      <label className="font-semibold">password</label>
      <input type="password" className="p-4 drop-shadow-sm bg-slate-50 outline-violet-500 border-none outline-2" value={password} onChange={handlePassword} placeholder="Enter your password"/>
      </div>
      <p className="float-right text-[10px]">Already have account ? <Link to='/login' className="text-red-500">Login Now</Link></p>
      <div className="mt-10">
      <button type="submit" className="hover:bg-white hover:text-red-500 border-solid border-red-500 hover:rounded-lg border-2 duration-700  p-5 bg-red-600 w-full h-full px-20 flex justify-center gap-2 text-white font-bold">
        <FaPinterest className='mt-1'/>Signup
      </button>
      </div>
      </form>
      <div className="text-center text-[#0000004a]">
        <span>-or-</span>
      </div>
      <div>
      <button className="p-5 border-green-600 border-solid border-2 w-full h-full px-20 flex justify-center gap-2 text-green-500 font-bold">
        <FaGooglePlay className='text-yellow-500 mt-1'/>Login with Google
      </button>
      </div>
      </div>
    </div>
  )
}

export default SignUp