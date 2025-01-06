import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activeStyle, setActiveStyle] = useState(1);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };

  const handleAddButton = () => {
    if (inputValue.trim() === "") {
      alert("Enter your fking task!");
    } else {
      setTodo((prev) => [
        ...prev,
        { text: inputValue, id: uuidv4(), status: "ACTIVE" },
      ]);
      setInputValue("");
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodo((prev) => [
        ...prev,
        { text: inputValue, id: uuidv4(), status: "ACTIVE" },
      ]);
      setInputValue("");
    }
  };


  //checkbox function
  const handleCheckBox = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "ACTIVE" ? "COMPLETED" : "ACTIVE" }
          : item
      )
    );
  };


  //Task filter function
  const toggleStyle = (buttonId) => {
    if (buttonId !== activeStyle) {
      setActiveStyle(buttonId);
    }
  };


  //Filter function
  const filteredTasks = todo.filter((task) => {
    if (activeStyle === 2) return task.status === "ACTIVE";
    if (activeStyle === 3) return task.status === "COMPLETED";
    return true;
  });


  //Delete function
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you fking sure delete this shit?");
    if (confirmDelete) {
      setTodo((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
// //handleAllDelete
//   const handleAllDelete = (status) => {
//     const confirmAllDelete = window.confirm("Ohh! Are you fking sure delete ALL this shit")
//     if (confirmAllDelete) {
//     }
//   }

const maxLenght = 20;
const inputlenght = (inputValue, maxLenght) => {
  if (inputValue.length > maxLenght) {
    return;
  }
};

  //make div function
  return (
    <div className="App">
      <div className="main-container">
        <div className="sub-container">
          <h2 className="title">To-Do-List</h2>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              className="input"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Add a new task..."
            />
            <button onClick={handleAddButton} id="add-btn">
              Add
            </button>
          </div>
          <div className="filter-container">
            <button
              onClick={() => toggleStyle(1)}
              className={activeStyle === 1 ? "active-button" : "filter"}
            >
              All
            </button>
            <button
              onClick={() => toggleStyle(2)}
              className={activeStyle === 2 ? "active-button" : "filter"}
            >
              Active
            </button>
            <button
              onClick={() => toggleStyle(3)}
              className={activeStyle === 3 ? "active-button" : "filter"}
            >
              Completed
            </button>
          </div>
          {filteredTasks.length === 0 && (
            <p className="bttm-text">No tasks yet. Add one above!</p>
          )}
          {filteredTasks.map((todo) => (
            <div key={todo.id} className="task-item">
              <input
                className="checkbox-border"
                type="checkbox"
                checked={todo.status === "COMPLETED"}
                onChange={() => handleCheckBox(todo.id)}
              />
              <p
                className={todo.status === "COMPLETED" ? "completed-task, text" : "text"}
              >
                {todo.text}
              </p>
              <div className="delete-container"> 
                <button className="delete-bttn" onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-container">
            <p id="ftr-txt">
              Powered by <span id="clr-txt">Balkana Oppa</span>
            </p>
          </div>
      </div>
    </div>
  );
}

export default App;
