import React from 'react'
import {FaPlus} from 'react-icons/fa6'

function CreateNewToDo() {
  return (
    <div className='mt-5'>
      <button type='button' className='btn btn-primary btn-lg fs-3 rounded-circle text-center' onClick={(event) => {console.log(event)}}><FaPlus/></button>
    </div> 
  )
}

export {CreateNewToDo}
