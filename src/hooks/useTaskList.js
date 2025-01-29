import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const useTaskList = () => {
  const [list, setList] = useState(() => {
    const savedTasks = localStorage.getItem("task");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(list));
  }, [list]);

  const addTask = (taskText) => {
    const newTask = {
      id: uuidv4(),
      text: taskText,
    };
    setList((prevList) => {
      const newList = [...prevList, newTask];
      localStorage.setItem("task", JSON.stringify(newList));
      return newList;
    });
  };

  const deleteTask = (taskId) => {
    setList((prevList) => {
      const newList = prevList.filter((task) => task.id !== taskId);
      localStorage.setItem("task", JSON.stringify(newList));
      return newList;
    });
  };

  const clearTasks = () => {
    setList([]);
    localStorage.removeItem("task");
  };

  return {
    list,
    addTask,
    deleteTask,
    clearTasks,
  };
};

export default useTaskList;
