import React from 'react'
import { BsPencil, BsTrash3} from "react-icons/bs";
import './components.css'

function Todo({task, deleteTodo, editTodo}) {
  return (
    <div className='single-todo'>
        <p className='todo-p'>{task.task}</p>
        <div className='btn'>
            <button className='todo-btn' onClick={() => editTodo(task.id)}>{< BsPencil/>}</button>
            <button className='todo-btn' onClick={() => deleteTodo(task.id)}>{< BsTrash3/>}</button>
        </div>
    </div>
  )
}

export default Todo