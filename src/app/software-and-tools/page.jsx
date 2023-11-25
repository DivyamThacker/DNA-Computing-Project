"use client"
import React from "react";
// import data from "@data/softwares";
import SoftwareItem from "../../components/SoftwareItem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function SoftwarePage(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
       "/api/Softwares"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="ml-10 mt-3">Software and Tools Page </h1>
      <div style={{position:"absolute", right:"-1100px", top:"10px"}}>Total Softwares : {data.length}</div>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
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

