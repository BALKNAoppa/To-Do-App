import React from "react";


function TaskCounter({ completedCount, totalCount, onDeleteCompleted }) {
  return (
    <div className="main-cmpltd-cntnr">
      <p className="completed-counter-cntnr">
        {completedCount} of {totalCount} tasks completed
      </p>
      {completedCount < 30 && (
        <button
          className="delete-all-completed-btn"
          onClick={onDeleteCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
}

export default TaskCounter;
