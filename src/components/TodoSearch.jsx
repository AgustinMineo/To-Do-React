import React from 'react'
import { FaSistrix } from "react-icons/fa6";
function TodoSearch({searchValue,setSearchValue}) {
  /*const [searchValue, setSearchValue] = React.useState(''); */// Declaramos un estado de la variable searchValue por defecto con React.useState(''); Para que este campo este vació

  return (
    <div>
      <div className='w-100 mt-5 form-floating mx-5 border border-white rounded-pill'>
        
          <input type='text' placeholder="Search Task" className='w-100 form-control rounded-pill' value={searchValue}
          onChange={(event)=>{setSearchValue(event.target.value);}}/>
          <label for="floatingTextarea" className='d-flex align-items-end justify-content-end justify-content-between w-100'>Search Task <span className=''><FaSistrix/></span></label>
      </div>
    </div>
  )
}

export {TodoSearch}
