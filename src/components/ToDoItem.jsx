import React from 'react'
import { FaClipboardCheck, FaX,FaRegTrashCan } from 'react-icons/fa6';

function ToDoItem({text,status,onComplete,onDelete}) {
  return (
    <div className='my-1 mx-5 w-auto'>
      <span role="button" className='d-flex justify-content-end align-items-end ' onClick={onDelete}><FaRegTrashCan/></span>
      <li className='border border-info row rounded-pill'>
        <div className='d-flex flex-wrap col-1'>
          <div role="button" className='d-flex justify-content-center align-items-center w-100' onClick={onComplete}>{status ?  <FaClipboardCheck/> : <FaX/> }</div>
        </div>
        <div className='d-flex my-2 fs-5  col-10'>
          <p className={status ? 'text-center text-muted text-decoration-line-through' : 'text-center'}>{text}</p>
        </div>
      </li>
          
    </div>
  )
}

export {ToDoItem}
