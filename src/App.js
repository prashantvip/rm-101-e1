import React from "react";
import TaskApp from "./components/TaskApp.jsx"
import tasks from './data/tasks.json';
function App() {
  return <div>
    <TaskApp data={tasks}/>
  </div>;
}


export default App;
