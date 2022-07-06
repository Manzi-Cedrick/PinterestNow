import React,{useState } from 'react'
import Pin from '../Home/Container/Pin';
import Addpinterest from '../Home/footer/Addpinterest'
import NavBar from '../Home/NavBar'

function Account() {
    const [showPins,setShowPins] = useState(true);
    const [showCreated,setShowCreated] = useState(false);
    const handleShowCreate = () => {
        showPins && setShowPins(false) && setShowCreated(true);
    }
  return (
    <div className='account'>
        <NavBar/>
        <div className='flex flex-col p-5 m-auto  '>
            <div className=' p-10 px-12 bg-orange-500 m-auto flex flex-col rounded-full justify-center'>
                <span className='text-white font-bold'>C</span>
            </div>
            <div className='m-auto p-5'>
                <p className='text-3xl font-bold'>Manzi Cedrick</p>
                <p className='text-[#00000048]'>cedrickmanzii0@gmail.com</p>
                <p className='font-bold'>1M Followings</p>
            </div>
            <div className='flex m-auto gap-2'>
                <button className='bg-zinc-200 text-black p-4 rounded-full px-8  hover:bg-slate-300'>Share</button>
                <button className='bg-zinc-200 text-black p-4 px-8 rounded-full hover:bg-slate-300'>Edit Profile</button>
            </div>
            <div className='flex m-auto gap-2 my-4 mt-[5em]'>
            <button className={`border-b-black border-none outline-black outline-2 outline-solid border-2  p-2 px-10  hover:bg-slate-200 ${showCreated && 'bg-slate-700 text-white'}`} onClick={handleShowCreate}>Create</button>
            <button className={`border-b-black border-none outline-black outline-2 outline-solid border-2  p-2 px-10  hover:bg-slate-200 ${showPins && 'bg-slate-700 text-white'}`} onClick={()=>setShowPins(true)}>Saved</button>
            </div>
            {showPins && <Pin/>}
            {showCreated && <h1>No Data Recently Added</h1>}
        </div>
        <Addpinterest/>
    </div>
  )
}

export default Account;