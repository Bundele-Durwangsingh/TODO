import { useState, useEffect } from "react";
import { db, tasksCollection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from "../firebase";

const useTaskList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(tasksCollection, (snapshot) => {
      const tasks = snapshot.docs.map((doc) => ({ id: doc.id, text: doc.data().text }));
      setList(tasks);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async (taskText) => {
    await addDoc(tasksCollection, { text: taskText });
  };


  const deleteTask = async (taskId) => {
    await deleteDoc(doc(db, "tasks", taskId));
  };

  const clearTasks = async () => {
    const querySnapshot = await getDocs(tasksCollection);
    querySnapshot.forEach(async (task) => {
      await deleteDoc(doc(db, "tasks", task.id));
    });
  };

  return { list, addTask, deleteTask, clearTasks };
};

export default useTaskList;
