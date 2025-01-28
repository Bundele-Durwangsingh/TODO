import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import useTaskList from './hooks/useTaskList';
import { useState } from "react";

function App() {
  const { list, addTask, deleteTask, clearTasks } = useTaskList();
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="heading">Todo App</h1>
        <TaskInput taskList={addTask} />
        <input
          type="text"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <hr />
        <div className="todo-list">
          {list
            .filter((task) =>
              task.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((task) => (
              <TaskList
                key={task.id}
                item={task}
                deleteTask={deleteTask}
              />
            ))}
        </div>
        <p>You have {list.length} pending tasks</p>
        {list.length > 0 && (
          <button className="clear-btn" onClick={clearTasks}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
