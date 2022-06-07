import React from 'react'
import logo from '../images/logo.png'
import Icons from './Icons'
import Search from './Search'
function NavBar() {
  return (
    <div className='Navbar h-[10vh] flex gap-2 w-full bg-white '>
        <div className='h-[4vh] w-[4vh] ml-5 mt-5 rounded-full'>
            <img src={logo} alt="" className='h-full w-full rounded-full' />
        </div>
        <div className='px-5 my-3 flex flex-col justify-center bg-black text-white rounded-full'>
            <span>Home</span>
        </div>
        <Search/>
        <Icons/>
    </div>
  )
}

export default NavBar