import './App.css';
import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [activeStyle, setActiveStyle] = useState(1)
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };
  const handleAddButton = () => {
    if (inputValue.length === 0) {
      alert("Please enter your fucking task")
    } else {
      setTodo([...todo, { text: inputValue, id: uuidv4(), status: "ACTIVE" | "COMPLETED" }]);
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

  const togglestyle = (buttonId) => {
      if (buttonId === activeStyle){
        return;
      }
    setActiveStyle(buttonId === activeStyle ? null : buttonId);
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className='sub-container'>
          <h2 className='title'>To-Do-List</h2>
          <div className='input-container'>
            <input type="text" value={inputValue} className='input' onChange={handleInputChange} placeholder='Add a new task...' />
            <button onClick={handleAddButton} id='add-btn'>Add</button>
          </div>
          <div className='filter-container'>
            <button onClick={() => togglestyle(1)} className={` ${activeStyle === 1 ? "active-button" : "filter"}`}>All</button>
            <button onClick={() => togglestyle(2)} className={` ${activeStyle === 2 ? "active-button" : "filter"}`}>Active</button>
            <button onClick={() => togglestyle(3)} className={` ${activeStyle === 3 ? "active-button" : "filter"}`}>Completed</button>
          </div>
          <p className='bttm-text'>No tasks yet. Add one above!</p>
        </div>
        <div className='active-container'>
          {todo.map((todo) => {
            return <div>
              <input className='checkbox-border' type="checkbox" onChange={handleCheckBox(todo.id)} />
              {todo.text}
            </div>
          })}
        </div>
        <div className='footer-container'>
          <p id='ftr-txt'>Powered by <span id='clr-txt'>Balkana Oppa</span></p>
        </div>
      </div>
    </div>
  );
}
export default App;