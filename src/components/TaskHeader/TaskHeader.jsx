import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({tasks}) => {
  // sample values to be replaced
  let totalTask = tasks.length;
  let unCompletedTask = tasks.filter((item) => !item.done).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h2>Todo List</h2>
      <b data-testid="header-remaining-task">you have {unCompletedTask} of</b>
      <b data-testid="header-total-task">{totalTask} remaining</b>
    </div>
  );
};

export default TaskHeader;
