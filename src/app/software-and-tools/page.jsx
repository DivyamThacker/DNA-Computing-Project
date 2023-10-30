import React from "react";
import data from "@data/softwares";
import SoftwareItem from "../../components/SoftwareItem";
import styles from "./page.module.css";

const SoftwarePage = () => {
  return (
    <div>
      <h1 className="ml-10">Software and Tools Page </h1>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
            <input type="checkbox" className={`${styles.checkbox}`} />
          </div>
          <div className={`${styles.grid_item}`}>Name</div>
          <div className={`${styles.grid_item}`}>Description</div>
          <div className={`${styles.grid_item}`}>Link</div>
        </div>
        {data.map((item, idx) => {
          return (
            <SoftwareItem
              key={idx}
              idx={idx}
              description={item["Description"]}
              name={item["Title"]}
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SoftwarePage;
