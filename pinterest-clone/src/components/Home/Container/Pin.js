import React,{useState,useEffect} from 'react'
import './pic.css';
import './data';
import Data from './data';
import CrazyLoader from './CrazyLoader';
import Cookie from 'js-cookie'
import { Link } from 'react-router-dom';
function Pin() {
    const dummy_data = Data;
    const [img_obj,setobj] = useState(dummy_data);
    const [lazyloader,setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        async function getImageData(){
            const imageCount = 20;
            // ie1rPYc1tALL5Z8GthqV4D1IKR22NkVnUFsZAj4cuiQ
            const clientID = 'nYWoDYzL6JOt7_OB9yWFQn5dbJyzh3ZoNIOwVGxV_Ws';
            const data = await fetch(`https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${imageCount}`)
            const Data_objects = await data.json();
            setobj(Data_objects);
            console.log(Data_objects);
            sendDataToMyBackend(Data_objects);
            setLoader(false)
            return Data_objects;
        }
        getImageData();
        },[]);
        
        const sendDataToMyBackend = async (img_obj) =>{
            var i=0;
            const token = await Cookie.get('TokenData')
            console.log(token)
            while(i < img_obj.length){
                // console.log(img_obj[i].id)
                await fetch('http://localhost:3500/v1/board/pin/addNewPin',{
                method : "POST",
                headers : {
                    authorization : 'Bearer ' + token,
                    'Content-Type':'application/json'
                },
                body : JSON.stringify({
                    // id: img_obj[i].id,
                    link : img_obj[i].urls.regular,
                    title : img_obj[i].alt_description,
                    description : img_obj[i].description,
                    color : img_obj[i].color,
                    alt_text : img_obj[i].alt_description,
                    likes: img_obj[i].likes
                })
            })
            i++;
        }
        // return "Datasent";
    }
    return (
        <>
    {lazyloader ? <CrazyLoader/> : 
    <div className='w-[100vw] max-w-full mt-5 gap-5 columns-4 px-4 space-y-5'>
    {img_obj.map((imgobject,index)=>(
        <div key={index} className='card-grid relative overflow-hidden rounded-xl '>
        <Link to={`/pin/preview/${imgobject.id}`}>
            <img src={`${imgobject.urls.regular}`} alt=""  />
            <div className='absolute right-2 opacity-0 save-btn duration-700 top-2'>
            <button className='btn bg-red-500 drop-shadow text-bold text-white p-3 rounded-full px-8 flex justify-center place-items-center'>Save</button>
            </div>
            <div className='absolute opacity-0 lower-section duration-700 bottom-2 left-2 flex gap-12'>
            <div className='bg-white flex flex-col justify-center place-items-center rounded-xl '>
                <a href='/' className='text-underline text-[10px] font-bold px-2 decoration-black'>{imgobject.alt_description ? imgobject.alt_description : "www.tiktok.com"}</a>
            </div>
            <div className='flex gap-2'>

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