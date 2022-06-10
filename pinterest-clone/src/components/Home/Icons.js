import React,{useState} from 'react'
import {FaBell,FaComment, FaAngleDown } from 'react-icons/fa'
import logo from '../images/logo.png'
import {Link } from 'react-router-dom'
import ChatUI from '../Chat/ChatUI';
function Icons() {
  const [showInbox,setInbox] = useState(false);
  return (
    <>
    <div className='flex pt-2 gap-2'>
            <div className='h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full'>
                <FaBell className='text-[#808080cf] text-2xl'/>
            </div>
            <div onClick={()=>setInbox((prev)=>!prev)} className='h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full'>
                <FaComment className='text-[#808080cf] text-2xl'/>
            </div>
            <Link to='/profile'>
            <div className='h-[4vh] w-[4vh] mt-4 rounded-full'>
            <img src={logo} alt="" className='h-full w-full rounded-full' />
            </div>
            </Link>
            <FaAngleDown className=' mt-6 text-[#808080e8]  '/>
    </div>
    {showInbox && <ChatUI/>}
    </>
  )
}

export default Icons