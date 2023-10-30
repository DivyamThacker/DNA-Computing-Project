import React from "react";
import data from "@data/grants";
import ArticleItem from "../../components/GrantItem";
import styles from "./page.module.css";

const GrantsPage = () => {
  return (
    <div>
      <h1 className="ml-10">Research Grants Page </h1>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
            <input type="checkbox" className={`${styles.checkbox}`} />
          </div>
          <div className={`${styles.grid_item}`}>Organizations</div>
          <div className={`${styles.grid_item}`}>Amount of Fund(in USD)</div>
          <div className={`${styles.grid_item}`}>Type</div>
          <div className={`${styles.grid_item}`}>Link</div>
        </div>
        {data.map((item, idx) => {
          return (
            <ArticleItem
              key={idx}
              idx={idx}
              organization={item["Organization"]}
              amount={item["Amount of Fund(in USD)"]}
              type="Grant"
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GrantsPage;