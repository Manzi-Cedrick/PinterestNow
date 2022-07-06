import React,{useState} from 'react'
// import axios from 'axios';
// import { AppContextResume } from '../../AppContext';
import { Link} from 'react-router-dom';
import { FaFacebook, FaGooglePlay, FaInstagram, FaPinterest } from 'react-icons/fa';
function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const {userToken,setUserToken} = AppContextResume()
  // const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const FormDataSubmission = (event) => {
    event.preventDefault()
    // const PostData = async () => {
    //   const result = await axios.post('http://localhost:8080/v1/auth/user/login',{
    //     body: JSON.stringify({
    //       email: email,
    //       password: password
    //     })
    //   })
    //   const data = await result.json();
    //   setUserToken(data.token);
    //   if (userToken) return navigate('/home');
    // }
    // PostData();
    setPassword('')
    setEmail('')
  }
  return (
    <div className="h-screen w-screen">
      <img src="" alt="" />
      <div className="bg-white relative px-20 drop-shadow-sm h-screen w-full md:m-auto md:w-[80vw] md:px-10">     
      <div className="text-center pt-2 pb-12">
        <i><FaPinterest className="text-[8em] m-auto "/></i>
        <p>Welcome at Pinterest Community <p className="text-[10px]"> Welcome Now at pinterest connection. Establish</p> </p>
      </div>
      <form onSubmit={FormDataSubmission}>
      <div className="flex flex-col gap-2 text-left">
      <label className="font-semibold">email</label>
      <input type="text" className="p-4 drop-shadow-sm bg-slate-50 outline-violet-500 border-none outline-2" value={email} onClick={handleEmail} placeholder="Enter your email"/>
      </div>
      <div className="flex flex-col gap-2 text-left">
      <label className="font-semibold">password</label>
      <input type="password" className="p-4 drop-shadow-sm bg-slate-50 outline-violet-500 border-none outline-2" value={password} onClick={handlePassword} placeholder="Enter your password"/>
      </div>
      <p className="float-right text-[10px]">Don't have account ? <Link to='/signup' className="text-red-500">Signup</Link></p>
      <div className="mt-10">
      <button type="submit" className="hover:bg-white hover:text-red-500 border-solid border-red-500 hover:rounded-lg border-2 duration-700  p-5 bg-red-600 w-full h-full px-20 flex justify-center gap-2 text-white font-bold">
        <FaPinterest className='mt-1'/>Login
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
      <div className="flex left-44 absolute bottom-0  flex-col justify-center">
        <div className="flex gap-4">
            <p className="text-[12px]">Connect with: </p>
            <FaPinterest/><FaInstagram/><FaFacebook/>
        </div>
        <div className="text-black text-[12px]">
          <p>USA @ 2022</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login