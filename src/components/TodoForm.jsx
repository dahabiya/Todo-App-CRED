import React from 'react'
import { useState } from 'react'
import './components.css'

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState('');
    console.log(todo);
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(todo)
        {
            addTodo(todo)
            setTodo(" ")
        }

    }

    const handleSubmit2 =(e) => {
      alert("enter a valid To-do")
      e.preventDefault()
    }
  return (
    <form onSubmit={todo!=" "?  handleSubmit : handleSubmit2} className='add-form'>
        <input  className='add-form-text' type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button className='add-form-btn' type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm