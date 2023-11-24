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
        process.env.NEXT_PUBLIC_URL + "api/Softwares"
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

