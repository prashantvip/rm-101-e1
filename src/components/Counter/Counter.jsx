import React from "react";
import styles from "./counter.module.css";


const Counter = ({count,updateCount}) => {
  // sample value to be replaced
  // NOTE: do not delete `data-testid` key value pair

  
  return (
    <div className={styles.counter}>
      <button  onClick={() => updateCount(count + 1)} data-testid="task-counter-increment-button">+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button   onClick={() => updateCount(count - 1)} data-testid="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
