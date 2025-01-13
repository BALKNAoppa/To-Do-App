import React from "react";

function FilterButtons({ activeStyle, toggleStyle }) {
  return (
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
  );
}

export default FilterButtons;
