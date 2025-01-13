import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleAddTask = () => {
    if (!inputValue.trim()) {
      alert("Enter your task!");
    } else {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleAddTask();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        className="input"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask} id="add-btn">
        Add
      </button>
    </div>
  );
}

export default AddTask;
