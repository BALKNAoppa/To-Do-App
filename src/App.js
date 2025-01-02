import './App.css';
import React, { useState } from "react"

function App() {
  const [todo, setTodo] = useState ([]);

  return (
    <div className="App">
       <div className= "main-container"> 
        <div className='sub-container'>
          <h2 className='title'>To-Do-List</h2>
          <div className='input-container'>
            <input className='input' onChange={App} placeholder='Add a new task...'></input>
            <button id='add-btn'>Add</button>
          </div>
          <div className='filter-container'>
            <button id='all'></button>
            <button id='active'></button>
            <button id='completed'></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;