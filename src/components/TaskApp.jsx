import React, { useState } from "react";
import styles from "./taskApp.module.css";
import  TaskHeader from "./TaskHeader/TaskHeader";
import  AddTask  from "./AddTask/AddTask";
import  Tasks  from "./Tasks/Tasks";
import { v4 } from "uuid";

const TaskApp = ({data}) => {
  const [tasks,setTasks] = useState(data);

   const addTask = (newTask) => {
    if (newTask && !tasks.some((task) => task.text === newTask)) {
      const newTaskObj = {
        id: v4(),
        text: newTask,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

   const RemoveTask = (taskId) => {
    let newTasks = tasks.filter((task) => task.id !== taskId);
    console.log(newTasks);
    setTasks(newTasks);
  };

  const UpdateTask = (updatedTask) => {
    let newTasks = tasks.reduce((acc, crr) => {
      if (crr.id === updatedTask.id) {
        acc.push(updatedTask);
      } else {
        acc.push(crr);
      }
      return acc;
    }, []);
    setTasks([...newTasks]);
  };



  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={tasks} />
      <AddTask addTask={addTask} />
      <Tasks
            tasks={tasks}
            RemoveTask={RemoveTask}
            UpdateTask={UpdateTask}
      />
    </div>
  );
};

export default TaskApp;
