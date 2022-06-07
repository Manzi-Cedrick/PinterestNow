import React from 'react'
import logo from '../images/logo.png'
function NavBar() {
  return (
    <div className='Navbar h-[10vh] flex gap-6 w-full bg-[#ffffffae]'>
        <div className='h-[4vh] w-[4vh] ml-10 mt-5 rounded-full'>
            <img src={logo} alt="" className='h-full w-full rounded-full' />
        </div>
        <div className='px-5 my-3 flex flex-col justify-center bg-black text-white rounded-full'>
            <span>Home</span>
        </div>
        <div className='flex'>
        
        <input type="search" placeholder="Search Now.." className="bg-[#ebeaea] my-2 w-[70vw] px-5 rounded-full outline-none border-none focus:outline-4 focus:outline-blue-400 "  />
        </div>
    </div>
  )
}

export default NavBar