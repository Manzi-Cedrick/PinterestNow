import React from 'react'
import {FaSearch} from 'react-icons/fa';
function Search() {
  return (
    <div className='flex mt-3 my-2'>
        <FaSearch className='translate-x-8 mt-4 text-[#00000082]'/>
        <input type="search" placeholder="Search Now.." className="bg-[#ededed] w-[75vw] pl-10 pr-5 rounded-full outline-none border-none focus:outline-4 focus:outline-blue-400 "  />
    </div>
  )
}

export default Search