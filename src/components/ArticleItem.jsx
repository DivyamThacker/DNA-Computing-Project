import React from "react";
import styles from "../app/research-papers/page.module.css";
const ArticleItem = (props) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.grid_item}`}>
        <input type="checkbox" className={`${styles.checkbox}`} />
      </div>
      <div className={`${styles.grid_item} ${styles.tooltip}`}>
        <span className={`${styles.tooltiptext}`}>{props.title}</span>
        {props.title.length > 45
          ? `${props.title.substr(0, 45)}...`
          : props.title}
      </div>
      <div className={`${styles.grid_item} ${styles.tooltip}`}>
        <span className={`${styles.tooltiptext}`}>{props.topics}</span>
        {props.topics.length > 25
          ? `${props.topics.substr(0, 25)}...`
          : props.topics}
      </div>
      <div className={`${styles.grid_item}`}>{props.type}</div>
      <div className={`${styles.grid_item} ${styles.tooltip}`}>
        <span className={`${styles.tooltiptext}`}>{props.authors}</span>
        {props.authors.length > 18
          ? `${props.authors.substr(0, 15)}...`
          : props.authors}
      </div>
      <div className={`${styles.grid_item}`}>{props.publishedDate}</div>
      <div className={`${styles.grid_item}`}>{props.source}</div>
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

export default ArticleItem;
