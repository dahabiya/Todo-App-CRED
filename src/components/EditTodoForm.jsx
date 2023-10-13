import React from 'react'
import { useState } from 'react'
import './components.css'

function EditTodoForm({task,editTask}) {
    const [editTodo, setEditTodo] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTask(editTodo, task.id)
    }
  return (
    <form onSubmit={handleSubmit} >
        <input className='add-form-text' type='text' placeholder="Enter task to do.." value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
        <button  className='add-form-btn' type='submit' >Save</button>
    </form>
  )
}

export default EditTodoForm