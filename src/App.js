import './App.css';
import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };
  const handleAddButton = () => {
    if (inputValue.length === 0) {
      alert("Please enter your fucking task")
    } else {
      setTodo([...todo, { text: inputValue, id: uuidv4(), status: "ACTIVE" | "COMPLETED"}]);
      setInputValue("");
    }
  };
  
  const handleCheckBox = (id) => {
    console.log(id);
    todo.map((todo) => {
      if (todo.id === id) {
        if (todo.status === "ACTIVE") {
          todo.status = "COMPLETED"
        } else {
          todo.status = "ACTIVE"
        }
      }
    })
}
  return (
    <div className="App">
      <div className="main-container">
        <div className='sub-container'>
          <h2 className='title'>To-Do-List</h2>
          <div className='input-container'>
            <input value={inputValue} className='input' onChange={handleInputChange} placeholder='Add a new task...' />
            <button onClick={handleAddButton} id='add-btn'>Add</button>
          </div>
          <div className='filter-container'>
            <button className='filter'>All</button>
            <button className='filter'>Active</button>
            <button className='filter'>Completed</button>
          </div>
          <p className='bttm-text'>No tasks yet. Add one above!</p>
        </div>
        <div className='active-container'>
          {todo.map((todo) => {
              return <div>
                <input type="checkbox" onChange={handleCheckBox(todo.id)} />
                {todo.text}
              </div>
            })}
          </div>
      </div>
    </div>
  );
}
export default App;