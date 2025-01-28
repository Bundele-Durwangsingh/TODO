import React from "react";

function TaskList({ item, deleteTask }) {
  return (
    <li className="Item-List">
      <span className="task-text">{item.text}</span> {/* Ensure task text is displayed */}
      <span className="icon">
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteTask(item.id)} // Pass the task ID
        ></i>
      </span>
    </li>
  );
}

export default TaskList;
