import React from 'react'
import { TodoSearch } from './TodoSearch'
function TodoCounter({total, completed,searchValue,setSearchValue}) {
  return (
    <div className='d-flex flex-wrap align-items-center justify-content-center'>
      <h1 className='fs-1 text-center'>
  {total === completed
    ? total === 0
      ? `You don't have any tasks`
      : `You have completed all  tasks`
    : `You have completed ${completed} of ${total} tasks`}
</h1>
      <div className={ total=== 0 ? 'visually-hidden' : 'mb-5 w-75' }>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
    </div>
  )
}

export { TodoCounter}
