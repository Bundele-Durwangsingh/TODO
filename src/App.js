import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [list, setList] = useState([]);

  const taskList = (inputText) => {
    setList([...list, inputText]);
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="heading">Todo App</h1>
        <TaskInput taskList={taskList} />
        <hr />
        <div className="todo-list">
          {list.map((task, i) => (
            <TaskList key={i} item={task} deleteTask={deleteTask} index={i} />
          ))}
        </div>
        <p>You have {list.length} pending tasks</p>
        {list.length > 0 && (
          <button className="clear-btn" onClick={() => setList([])}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
