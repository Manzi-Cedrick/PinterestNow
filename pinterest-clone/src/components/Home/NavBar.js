import React from 'react'
import logo from '../images/logo.png'
import {FaSearch,FaBell } from 'react-icons/fa'
function NavBar() {
  return (
    <div className='Navbar h-[10vh] flex gap-4 w-full '>
        <div className='h-[4vh] w-[4vh] ml-5 mt-5 rounded-full'>
            <img src={logo} alt="" className='h-full w-full rounded-full' />
        </div>
        <div className='px-5 my-3 flex flex-col justify-center bg-black text-white rounded-full'>
            <span>Home</span>
        </div>
        <div className='flex mt-3 my-2'>
        <FaSearch className='translate-x-8 mt-4 text-[#00000082]'/>
        <input type="search" placeholder="Search Now.." className="bg-[#ebeaea] w-[70vw] pl-10 pr-5 rounded-full outline-none border-none focus:outline-4 focus:outline-blue-400 "  />
        </div>
        <div className='flex'>
            <div className='h-[6vh] w-[6vh] p-2 flex justify-center place-items-center  bg-slate-100 rounded-full'>
                <FaBell className='text-[grey]'/>
            </div>
        </div>
    </div>
  )
}

export default NavBar