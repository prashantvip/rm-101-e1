import React from "react";
import TaskApp from "./components/TaskApp.jsx"
import task from "./data/tasks.json"
import "./App.css"
function App() {
  return <div>
    <TaskApp task = {task}></TaskApp>
  </div>;
}

export default App;
