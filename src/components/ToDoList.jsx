import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
  const {todos, handleDeleteTodo, handleEditTodo} = props
  return (
    <ul>
      {todos.map((todo,todoIndex) => {
        return (
          <ToDoCard {...props} key={todoIndex} index ={todoIndex} >
            <p className='todoItem'>{todo}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}