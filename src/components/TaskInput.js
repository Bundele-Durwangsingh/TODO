import { useState } from "react";
import React from "react";

function TaskInput({ taskList }) {
  const [inputText, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="add-btn"
        onClick={() => {
          if (inputText.trim() !== "") {
            taskList(inputText); // Pass only the text
            setInput("");
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default TaskInput;
