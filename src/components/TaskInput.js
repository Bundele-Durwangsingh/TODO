import { useState } from "react"
import React from 'react'

function TaskInput(props) {
    const[inputText,setInput] = useState('');
  return (
    
    <div>
        <input type='text' 
        className="inputBox" 
        placeholder='Enter your task' 
        value={inputText}
        onChange={e=>{
            setInput(e.target.value)
            }}></input>
        <button className='add-btn'
        onClick={()=> {
            props.taskList(inputText)
            setInput("")
            }}>+</button>
        
    </div>
  )
}

export default TaskInput
