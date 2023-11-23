'use client';
import React from "react";
import styles from "../app/blogs/page.module.css";
import { useState } from "react";
const BlogItem = (props) => {
  const [chkValue, setChkValue] = useState(props.checked); 
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.grid_item}`}>
      <input type="checkbox" checked={chkValue} className={`${styles.checkbox}`} onChange={()=>setChkValue(!chkValue)}/>
      </div>
      <div className={`${styles.grid_item} ${styles.tooltip}`}>
        <span className={`${styles.tooltiptext}`}>{props.title}</span>
        {props.title.length > 45
          ? `${props.title.substr(0, 45)}...`
          : props.title}
      </div>
      <div className={`${styles.grid_item}`}>{props.type}</div>
      <div className={`${styles.grid_item}`}>{props.organization}</div>
      <div className={`${styles.grid_item}`}>
        <a href={props.link}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={()=>setChkValue(true)}
          >
            Open
          </button>
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
