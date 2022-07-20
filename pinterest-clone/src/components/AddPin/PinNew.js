import React,{useState} from 'react'
import { FaEllipsisH, FaUpload } from 'react-icons/fa'
import axios from 'axios'
import Cookie from 'js-cookie'
function PinNew() {
    const [showIcon,setshowIcon] = useState(false);
    const [title,setTitleValue] = useState("");
    const [textArea,setAreaValue] = useState("");
    const [link,setLinks] = useState("");
    const getTitle = (e) =>{
      setTitleValue(e.target.value)
    }
    const getTextArea = (e) =>{
      setAreaValue(e.target.value)
    }
    const getLinkData = (e) =>{ 
      setLinks(e.target.value)
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
    const token = Cookie.get('TokenData')
      const PostPin = async () =>{
        const result = await axios.post('http://localhost:8080/v1/board/pin/addNewPin',{
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+ token
          },
          body: JSON.stringify({
            title: title,
            links: link,
            description: textArea
          })
        })
        const dataresponse = await result.json();
        console.log("The Data response sent",dataresponse);
      }
      PostPin();
      setAreaValue('')
      setTitleValue('')
      setLinks('')
    }
  return (
    <div className='AddPin relative bg-white m-auto w-[60vw] rounded-xl mt-5  flex justify-between px-5'>
        <div className='flex p-5 flex-col gap-4 '>
        <div className='h-[6vh] w-[6vh] p-3 flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full' onClick={()=>setshowIcon((prev)=>!prev)}>
            <FaEllipsisH className='text-[#808080cf] text-2xl'/>
        </div>
        {showIcon && 
        <div className='duration-700 bg-white overflow-hidden flex flex-col h-20 w-72 rounded-xl absolute top-[12%]'>
          <button className='btn btn-primary text-bold p-2 hover:bg-slate-100'>Delete</button>
          <button className='btn btn-primary text-bold p-2 hover:bg-slate-100'>Duplicate</button>
        </div>}
        <div className='h-[50vh] w-[20vw] border-dashed border-[3px]  border-slate-300 flex flex-col justify-center place-items-center rounded-xl bg-slate-200'>
            <div className='flex flex-col gap-2 text-center'>
                <button className='h-12 w-12 ml-10 place-items-center bg-[grey] text-white flex justify-center rounded-full'>
                <FaUpload className='ml-4 text-5xl'/>
                    <input type='file' className='w-full opacity-0 h-full'/>
                </button>
                <span className='text-[#000000af]'>Drag and Drop File</span>
            </div>
        </div>
        <button className='px-10 rounded-xl hover:bg-zinc-200 bg-slate-300 p-5'>
          Save From Site
        </button>
        </div>
        <div className='flex flex-col  p-4'>
        <div className='flex float-right absolute right-10'>
            <select name="selection" className='bg-zinc-100 rounded-l-lg px-4' id="">
              <option value="Create Board">Create Pin</option>
              <option value="Create Board">Create Board</option>
            </select>
            <button className='bg-red-600 text-white p-2 rounded-r-lg px-4' type='submit' onClick={handleSubmit}>Save</button>
        </div>
          <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={getTitle} className='text-3xl py-3 mt-16 w-full px-1 outline-2  outline-blue-500 font-bold bg-transparent border-b-sky-500 outline-b-blue-500 border-2 border-none' placeholder='Add Your Title'/>
          <div className='flex  text-black'>
          <div className='h-8 w-8 my-3 rounded-full flex place-items-center justify-center bg-orange-500'>
            <span className='text-white font-bold'>C</span>
          </div>
          <p className='pt-5 px-2 text-[12px] font-bold'>cedrickmanzii0@gmail.com</p>
          </div>
          <div className='my-2 flex flex-col  text-left'>
          <textarea name="text-area" resizable="no" value={textArea} onChange={getTextArea} placeholder='Add alt description' className='overflow-y-auto overflow-x-auto p-2 bg-[#8080803e]  focus:outline-none w-[30vw] h-[10vh]'></textarea>
          <small className="text-[#0000006d]">People will usually see the first 50 characters when they click on your Pin.</small>
          <button className="btn mt-2 btn-primary bg-[#8080803e] text-black font-bold flex justify-center w-32 p-3 rounded-full">Add Alt Text</button>
          <input type="text" onChange={getLinkData} value={link} className="mt-[6.5em] outline-none p-3 border-b-[#00000040] focus:outline-2 focus:outline-blue-500  border-2 border-none " placeholder="www.example.com" />
          <small className="text-[#0000006d] text-left">Add Destination Link</small>
          </div>
          </form>
        </div>
    </div>
  )
}

export default PinNew