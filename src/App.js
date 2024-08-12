// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Task } from './Task';

function App() {

  let [taskList,setTaskList] = useState([]);
  // let task = "";
  let [task,setTask] = useState("");
  
  const addItem = () => {
    const newTask = {
      id: taskList.length !== 0 ? taskList[taskList.length-1].id+1 : 1,
      task: task,
      completed: false
    };
    setTaskList([...taskList,newTask]);
    console.log(taskList);
  }

  const extractValue = (event) =>{
    // task = event.target.value;
    setTask(event.target.value);
  }

  const deleteTask = (taskToDeleteID) => {
    
    console.log(taskList);
    setTaskList(taskList.filter((task) => {
      return (task.id !== taskToDeleteID)
    }));    
    console.log(taskList);
  }

  const completeTask = (completedTaskID) => {
    setTaskList(taskList.map((task) => {
      if(task.id === completedTaskID)
        return {...task,completed: !task.completed};
      else
      return task;
    }));
  };
  

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={extractValue}></input>
        <button onClick={addItem}>Add Task</button>
      </div>
      {/* {task} */} 
      <div className="displayTask">
        {taskList.map((task) => {
          return( 
            <Task taskName = {task.task} completed = {task.completed} completeTask = {completeTask} id = {task.id} deleteTask = {deleteTask} />
        );
        }) }       
        </div>
    </div>
  );
}

export default App;
