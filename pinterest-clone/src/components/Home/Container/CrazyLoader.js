import React from 'react'
import './loader.css'
function CrazyLoader() {
  return (
    <div className="flex flex-col mt-5 m-auto">
    <div className="CrazyLoader m-auto bg-[#00000096] w-14 h-14 rounded-full flex justify-center place-items-center">
      <div className="spinner ">
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
</div>
    </div>
    <div className="text-black pt-2 text-center">
      <span>Collecting Your PiCode Feed returns Now</span>
    </div>
    </div>
  )
}

export default CrazyLoader