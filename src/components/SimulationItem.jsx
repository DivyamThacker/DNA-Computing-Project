import React from "react";
import styles from "../app/simulation-tools/page.module.css";
const SimulationItem = (props) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.grid_item}`}>
        <input type="checkbox" className={`${styles.checkbox}`} />
      </div>
      <div className={`${styles.grid_item}`}>{props.name}</div>
      <div className={`${styles.grid_item}`}>{props.type}</div>
      <div className={`${styles.grid_item}`}>
        <a href={props.link}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Open
          </button>
        </a>
      </div>
    </div>
  );
};

export default SimulationItem;