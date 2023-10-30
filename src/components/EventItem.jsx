import React from "react";
import styles from "../app/conferences-and-webinar-events/page.module.css";
const EventItem = (props) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.grid_item}`}>
        <input type="checkbox" className={`${styles.checkbox}`} />
      </div>
      <div className={`${styles.grid_item} ${styles.tooltip}`}>
        <span className={`${styles.tooltiptext}`}>{props.name}</span>
        {props.name.length > 45
          ? `${props.name.substr(0, 45)}...`
          : props.name}
      </div>
      <div className={`${styles.grid_item}`}>{props.type}</div>
      <div className={`${styles.grid_item} ${styles.tooltip}`}>
      <span className={`${styles.tooltiptext}`}>{props.organizations}</span>
        {props.organizations.length > 45
          ? `${props.organizations.substr(0, 45)}...`
          : props.organizations}
      </div>
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

export default EventItem;
