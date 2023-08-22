import './App.css';
import { useState } from "react";
import {Task} from "./Task"

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask !== ""){
    const task ={
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id +1,
      taskName: newTask, 
    };
    setTodoList([...todoList, task]);
    }
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) =>{ 
      return task.id !== id;
    }));
  }
 
  return (
    <div className="App">
      <div className = "addTask">
        <h1 className='heading'>Todo List</h1>
        <input onChange = {handleChange}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className= "list">
        {todoList.map((task) => {
          return <div className='taskItem'><Task taskName = {task.taskName} id = {task.id} deleteTask = {deleteTask}/></div>;
        })}
      </div>
    </div>
  );
}

export default App;
