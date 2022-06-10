import React from 'react'
import NavBar from '../Home/NavBar'
import AddPin from './AddPin'

function CreateNewPin() {
  return (
    <div className='CreateNewPin'>
        <NavBar/>
        <AddPin/>
    </div>
  )
}

export default CreateNewPin