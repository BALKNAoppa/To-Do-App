import React from "react";

function TaskInput({ inputValue, onInputChange, onAddTask, onKeyDown }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        className="input"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder="Add a new task..."
        maxLength={50}
      />
      <button onClick={onAddTask} id="add-btn">
        Add
      </button>
    </div>
  );
}

export default TaskInput;
