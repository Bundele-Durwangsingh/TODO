import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useTaskList = () => {
  const [list, setList] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: uuidv4(), // Generate a unique ID
      text: taskText, // Store the task text
    };
    setList((prevList) => [...prevList, newTask]);
  };

  const deleteTask = (taskId) => {
    setList((prevList) => prevList.filter((task) => task.id !== taskId));
  };

  const clearTasks = () => {
    setList([]);
  };

  return {
    list,
    addTask,
    deleteTask,
    clearTasks,
  };
};

export default useTaskList;
