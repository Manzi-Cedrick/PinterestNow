import React from 'react'
import {  FaImage, FaPlus } from 'react-icons/fa'
import Addpinterest from '../Home/footer/Addpinterest'
import PinNew from './PinNew';
function AddPin() {
  return (
    <>
    <div className='flex'>
    <div className='flex flex-col '>
    <div className='h-[8vh] w-[]8vh] p-4 m-2 flex justify-center place-items-center bg-slate-300 hover:cursor-pointer rounded-xl' >
        <FaPlus className='text-[#2c2b2bcf] text-2xl'/>
    </div>
    <div className='h-[6vh] w-[6vh] p-4 m-2 flex justify-center place-items-center bg-slate-200 border-l-black border-2 border-solid hover:cursor-pointer ' >
        <FaImage className='text-[#2c2b2bcf] text-2xl'/>
    </div>
    </div>
    <PinNew/>
    </div>
    <Addpinterest/>
    </>
  )
}

export default AddPin