"use client"
import React from "react";
// import data from "@data/grants";
import ArticleItem from "../../components/GrantItem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function GrantsPage(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "/api/Grants"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="ml-10 mt-3">Research Grants Page </h1>
      <div style={{position:"absolute", right:"-1100px", top:"10px"}}>Total Grants : {data.length}</div>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
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
              amount={item["Funds"]}
              type="Grant"
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

