import React from 'react'

export default function ToDoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props
  return ( 
    <li className='todoItem'>
      {children} 
      <div className='actionsContainer'> 
        <button onClick={() => {handleDeleteTodo(index)}}>
          <i class="fa-solid fa-trash "></i>
        </button>
        <button onClick={() => { handleEditTodo(index)}} >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    
    </li>
  )
}
