import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({ task, UpdateTask, RemoveTask}) => {

  function toggleTaskStatus() {
    UpdateTask({
      ...task,
      done: !task.done,
    });
  }

  const updateCount = (newCount) => {
    if (newCount > 0) {
      UpdateTask({
        ...task,
        count: newCount,
      });
    }
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <div className={styles.flex}>
      <input type="checkbox" data-testid="task-checkbox" onChange={toggleTaskStatus} checked={task.done}/>
      <div data-testid="task-text" className={task.done? styles.done:styles.notDone}>{task.text}</div>
      {/* Counter here */}
      
      <Counter count={task.count} updateCount={updateCount}/>
      <button data-testid="task-remove-button" onClick={() => RemoveTask(task.id)}>X</button>
      </div>
    </li>
  );
};

export default Task;
