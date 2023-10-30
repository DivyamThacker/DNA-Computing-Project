import React from "react";
import data from "@data/patents";
import PatentItem from "../../components/PatentItem";
import styles from "./page.module.css";

const PatentsPage = () => {
  return (
    <div>
      <h1 className="ml-10">Patents Page </h1>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
            <input type="checkbox" className={`${styles.checkbox}`} />
          </div>
          <div className={`${styles.grid_item}`}>Title</div>
          <div className={`${styles.grid_item}`}>Type</div>
          <div className={`${styles.grid_item}`}>Authors/Organizations</div>
          <div className={`${styles.grid_item}`}>Link</div>
        </div>
        {data.map((item, idx) => {
          return (
            <PatentItem
              key={idx}
              idx={idx}
              type="Patent"
              title={item["Title"]}
              authors={item["Organization / Authors"]}
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PatentsPage;
