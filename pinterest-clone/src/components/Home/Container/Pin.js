import React,{useState,useEffect} from 'react'
import './pic.css';
import {FaComment} from 'react-icons/fa'
import './data';
import Data from './data';
import CrazyLoader from './CrazyLoader';
import { Link } from 'react-router-dom';
function Pin() {
    const dummy_data = Data;
    const [img_obj,setobj] = useState(dummy_data);
    const [lazyloader,setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        async function getImageData(){
            const imageCount = 20;
            const clientID = 'znkQoJ27tsjEq4lux_CqaQ1RU3e3vfDpr8TApPtyfg4';
            const data = await fetch(`https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${imageCount}`)
            const Data_objects = await data.json();
            setobj(Data_objects);
            console.log(img_obj);
            setLoader(false)
            return Data_objects;
        }
        getImageData();
    },[]);
    return (
        <>
    {lazyloader ? <CrazyLoader/> : 
    <div className='w-full max-w-full mt-  pb-10 mb-10 gap-5 columns-4 px-2 space-y-5'>
    {img_obj.map((imgobject,index)=>(
        <div key={index} className='card-grid relative overflow-hidden rounded-xl '>
        <Link to='/pin/preview'>
            <img src={`${imgobject.urls.regular}`} alt=""  />
            <div className='absolute right-2 opacity-0 save-btn duration-700 top-2'>
            <button className='btn bg-red-500 drop-shadow text-bold text-white p-3 rounded-full px-8 flex justify-center place-items-center'>Save</button>
            </div>
            <div className='absolute opacity-0 lower-section duration-700 bottom-2 left-2 flex gap-12'>
            <div className='bg-white flex flex-col justify-center place-items-center rounded-xl '>
                <a href='/' className='text-underline text-[10px] px-2 decoration-black'>{imgobject.alt_description ? imgobject.alt_description : "www.tiktok.com"}</a>
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
        </Link>
        </div>
        ))}
    </div>
    }
    </>
  )
}

export default Pin