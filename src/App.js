import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [list,setList]=useState([]);
  let taskList=(inputText)=>{
    setList([...list,inputText]);
  }
  return (
    <div className="App">
      <TaskInput taskList={taskList}/>
      <h1 className='heading'>Todo App</h1>
      <hr/>
      {list.map((task,i) => {
        return( 
        <TaskList key = {i} item ={task}/> 
        
      )
      })}
    </div>
  );
}

export default App;
