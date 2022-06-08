import React,{useState} from 'react'
import { FaClipboard, FaEdit, FaPlus, FaQuestion } from 'react-icons/fa'

function Addpinterest() {
    const [activate,setActivate] = useState(false);
    const [showQuestion,setQuestion]= useState(false);
  return (
    <>
        {activate &&
        <ul  className="bg-white-500 fixed bg-white bottom-[8%] right-[5%] text-left overflow-hidden list-style-none rounded-xl w-96 flex flex-col justify-evenly h-24">
        <li className="text-black text-[14px] font-bold  hover:cursor-pointer hover:bg-stone-100 p-3  text-bold flex "><FaPlus className="mx-2 mt-1"/>Create New Pin</li>
        <li className="text-black text-[14px] font-bold  hover:cursor-pointer hover:bg-stone-100 p-3 text-bold flex "><FaClipboard className="mx-2 mt-1"/>Create New Idea</li>
        </ul>
        }
        {showQuestion &&
        <>
        <ul  className="bg-white-500 fixed bg-white bottom-[8%] right-[5%] text-left overflow-hidden list-style-none rounded-xl w-96 flex flex-col justify-evenly h-32">
        <li className="text-black text-[14px] font-bold  hover:cursor-pointer hover:bg-stone-100 p-3  text-bold flex justify-between ">Visit the Help Center <FaEdit /></li>
        <li className="text-black text-[14px] font-bold  hover:cursor-pointer hover:bg-stone-100 p-3 text-bold flex justify-between ">Create New Idea <FaEdit /></li>
        <div className=" text-[#0000006d] text-[14px] px-2  ">
            <span className="px-3 font-underline">About</span>
            <span className="px-3 font-underline">Developers</span>
            <span className="px-3 font-underline">Careers</span>
            <span className="px-3 font-underline">Blogs</span>
            <span className="px-3 font-underline">Job</span>
            <span className="block text-center text-[10px]">Developed by Cedrick Association</span>
        </div>
        </ul>
        </>
        }
    <div className="Addpinterest fixed flex flex-col  bottom-5 right-2 ">
        <button className="btn p-2 w-14 h-14 rounded-full btn-primary flex justify-center place-items-center bg-slate-200 hover:bg-slate-300 border-white border-solid border-2" onClick={()=>setActivate((prev)=>!prev)}>
            <FaPlus className="fa text-black"/>
        </button>
        <button className='btn  p-2 w-14 h-14 rounded-full mt-2 btn-primary flex justify-center place-items-center bg-slate-200 hover:bg-slate-300 border-white border-solid border-2 ' onClick={()=>setQuestion((prev)=>!prev)}>
            <FaQuestion className="fa text-black"/>
        </button>
    </div>
    </>
  )
}

export default Addpinterest