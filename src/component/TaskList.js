import React from "react";

function TaskList({ tasks, onCheckBoxChange, onDelete }) {
  return tasks.length === 0 ? (
    <p className="bttm-text">No tasks yet. Add one above!</p>
  ) : (
    tasks.map((todo) => (
      <div key={todo.id} className="task-item">
        <input
          className="checkbox-border"
          type="checkbox"
          checked={todo.status === "COMPLETED"}
          onChange={() => onCheckBoxChange(todo.id)}
        />
        <p
          className={
            todo.status === "COMPLETED" ? "completed-task text" : "text"
          }
        >
          {todo.text}
        </p>
        <div className="delete-container">
          <button
            className="delete-bttn"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  );
}

export default TaskList;
