import React from 'react'

function NewTask() {
  return (
    <div className='w-100 mt-5 form-floating mx-5 border border-white rounded-pill'>
        <input type='text' placeholder="New Task" className='w-100 form-control rounded-pill' 
        onChange={(event)=>{
        console.log(event.target.value)}}/>
        <label for="floatingTextarea">New Task</label>
    </div>
  )
}

export {NewTask}
