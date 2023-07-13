import React from 'react'

function TodoList({ children }) {
  return (
    <div>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export { TodoList}
