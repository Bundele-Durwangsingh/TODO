import React from 'react'

function TaskList(props) {
    return (
    <li className='Item-List'>
        {props.item} 
        <span className='icon'>
            <i class="fa-solid fa-trash">
                </i>
                </span>
    </li>

    )
}

export default TaskList
