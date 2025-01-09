import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./component/Header";
import AddTask from "./component/AddTask";
import FilterButtons from "./component/FilterButtons";
import TaskList from "./component/TaskList";
import TaskCounter from "./component/TaskCounter";
import Footer from "./component/Footer";

function App() {
  const [todo, setTodo] = useState([]);
  const [activeStyle, setActiveStyle] = useState(1);

  const handleAddTask = (taskText) => {
    setTodo((prev) => [
      ...prev,
      { text: taskText, id: uuidv4(), status: "ACTIVE" },
    ]);
  };

  const handleCheckBox = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "ACTIVE" ? "COMPLETED" : "ACTIVE" }
          : item
      )
    );
  };

  const toggleStyle = (buttonId) => setActiveStyle(buttonId);

  const filteredTasks = todo.filter((task) => {
    if (activeStyle === 2) return task.status === "ACTIVE";
    if (activeStyle === 3) return task.status === "COMPLETED";
    return true;
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you fking sure delete this shit?");
    if (confirmDelete) {
      setTodo((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const handleDeleteCompleted = () => {
    if (!todo.filter((item)=> item.status === "COMPLETED" ).length > 0) return  alert("There is nothing to delete.")

    const confirmAllDelete = window.confirm(
      "Ohh! Are you fking sure you want to delete all completed tasks?"
    );
    if (confirmAllDelete) {
      setTodo((prev) => prev.filter((task) => task.status !== "COMPLETED"));
    }
  };

  const completedCount = todo.filter((task) => task.status === "COMPLETED")
    .length;

  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <AddTask onAddTask={handleAddTask} />
        <FilterButtons activeStyle={activeStyle} toggleStyle={toggleStyle} />
        <TaskList
          tasks={filteredTasks}
          onCheckBoxChange={handleCheckBox}
          onDelete={handleDelete}
        />
        {todo.length !== 0 && (
          <TaskCounter
            completedCount={completedCount}
            totalCount={todo.length}
            onDeleteCompleted={handleDeleteCompleted}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
