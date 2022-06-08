import React from "react";
import styles from "./tasks.module.css";
import {Task} from "../Task"

const Tasks = ({tasks, UpdateTask, RemoveTask}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {tasks.length >0? (
        <ul data-testid="tasks" className={styles.tasks}>
          {/* Task List */}
          {tasks.map((e)=>(
            <Task
            key={e.id}
            task={e}
            UpdateTask={UpdateTask}
            RemoveTask={RemoveTask}
          />
          ))}
        </ul>
      ) : (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          <h1>Empty</h1>
        </div>
      )}
    </>
  );
};

export default Tasks;
