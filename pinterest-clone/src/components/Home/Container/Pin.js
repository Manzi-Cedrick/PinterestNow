import React,{useState,useEffect} from 'react'
import './pic.css';
import {FaComment} from 'react-icons/fa'
function Pin() {
    const [img_obj,setobj] = useState([]);
    const getImageData=async ()=>{
        const clientID = 'znkQoJ27tsjEq4lux_CqaQ1RU3e3vfDpr8TApPtyfg4';
        const data = await fetch('https://api.unsplash.com/photos',{
            headers:{
                Authorization:`Client-ID ${clientID}` 
            }
        })
        const img_desc = await data.json();
        setobj(img_desc);
        console.log(img_obj);
    }
    useEffect(() => {
        getImageData();
    }, [img_obj]);
    
  return (
    <div className='flex-container-pin grid p-2'>
        <div className='card relative bg-red-100 rounded-xl max-h-[70vh] max-w-[20vw] min-h-[40vh] '>
            <img src={`data:image/jpeg;base64,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`} alt="" className='h-full w-full rounded-xl' />
            <div className='absolute right-2 opacity-0 hover:opacity-100 duration-700 top-2'>
            <button className='btn bg-red-500 drop-shadow text-bold text-white p-3 rounded-full px-8 flex justify-center place-items-center'>Save</button>
            </div>
            <div className='absolute opacity-0 hover:opacity-100 duration-700 bottom-2 left-2 flex gap-20 justify-between'>
            <div className='bg-white p-2 px-8 rounded-xl '>
                <a href='/' className='text-underline decoration-black'>Hello</a>
            </div>
            <div className='flex gap-2'>
            <div className='h-[6vh] w-[6vh] p-3 flex justify-center place-items-center bg-slate-100 hover:cursor-pointer  rounded-full'>
                <FaComment className='text-[#808080cf] text-2xl'/>
            </div>
            <div className='h-[6vh] w-[6vh] p-3 flex justify-center place-items-center bg-slate-100 hover:cursor-pointer  rounded-full'>
                <FaComment className='text-[#808080cf] text-2xl'/>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Pin