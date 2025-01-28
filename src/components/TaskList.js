import React from "react";

function TaskList({ item, deleteTask }) {
  return (
    <li className="Item-List">
      <span className="task-text">{item.text}</span> 
      <span className="icon">
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteTask(item.id)} 
        ></i>
      </span>
    </li>
  );
}

export default TaskList;
