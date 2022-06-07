import React from 'react'
import {FaBell,FaComment, FaAngleDown } from 'react-icons/fa'
import logo from '../images/logo.png'

function Icons() {
  return (
    <div className='flex pt-2 gap-2'>
            <div className='h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full'>
                <FaBell className='text-[#808080cf] text-2xl'/>
            </div>
            <div className='h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full'>
                <FaComment className='text-[#808080cf] text-2xl'/>
            </div>
            <div className='h-[4vh] w-[4vh] mt-4 rounded-full'>
            <img src={logo} alt="" className='h-full w-full rounded-full' />
            </div>
            <FaAngleDown className=' mt-6 text-[#808080e8]  '/>
        </div>
  )
}

export default Icons