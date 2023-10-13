import React from 'react'
import TodoForm from './TodoForm'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import './components.css'

function Todowrapper() {
    const [todos, setTodos] = useState([]);
    console.log(todos)

    const addTodo = (todo) => {
        setTodos([
            ...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false}
        ])
    }

    const deleteTodo = (id) => setTodos( todos.filter(todo => todo.id !== id))

    const editTodo = (id) =>{
        let newTodos = todos.map((todo) =>{
            return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        })
        setTodos(newTodos)
    }
    
    const editTask =(task, id) => {
        let newTodos = todos.map((todo) =>{
            return todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        })
        setTodos(newTodos)

    }
  return (
    <div> 
        <h2 className='wrapper-h2'>Things to do..</h2>
    <div className='todo-wrapper' >
        
        <TodoForm addTodo={addTodo} />
        {
            todos.map((todo) => (
                todo.isEditing ?(
                      <EditTodoForm task={todo} editTask ={editTask} />
                ) :
                (
                    <Todo 
                   key={todo.id} 
                   task={todo}    
                   deleteTodo={deleteTodo}   
                   editTodo ={editTodo}  
                        
                />
                )
                
            ))
        }
        </div>
    </div>
  )
}

export default Todowrapper