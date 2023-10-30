import React from "react";
import data from "@data/articles_papers";
import ArticleItem from "../../components/ArticleItem";
import styles from "./page.module.css";

const ResearchPapersPage = () => {
  return (
    <div>
      <h1 className={`ml-10 ${styles.prevent_select}`}>Articles and Papers Page </h1>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
            <input type="checkbox" className={`${styles.checkbox}`} />
          </div>
          <div className={`${styles.grid_item}`}>Title</div>
          <div className={`${styles.grid_item}`}>Topics</div>
          <div className={`${styles.grid_item}`}>Type</div>
          <div className={`${styles.grid_item}`}>Authors</div>
          <div className={`${styles.grid_item}`}>Published Date</div>
          <div className={`${styles.grid_item}`}>Source</div>
          <div className={`${styles.grid_item}`}>Link</div>
        </div>
        {data.map((item, idx) => {
          return (
            <ArticleItem
              key={idx}
              idx={idx}
              type={item["Type"]}
              source={item["Source"]}
              title={item["Title"]}
              topics={item["Topics"]}
              authors={item["Authors"]}
              publishedDate={item["Published Date"]}
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResearchPapersPage;
