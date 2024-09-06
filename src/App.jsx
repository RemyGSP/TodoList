import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

  const [todoValue, setTodoValue] = useState('')
  const [todos,setTodos] = useState([])

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  return (
    <main>
        <ToDoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}>
          
        </ToDoInput>
        
      <ToDoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />


    </main>
      
      
      
    )
  }
  
  export default App
