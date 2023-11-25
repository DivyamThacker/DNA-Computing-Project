"use client"
import React from "react";
import data from "@data/projects";
import ProjectItem from "../../components/ProjectItem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ProjectsPage(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_VERCEL_URL + "api/Projects"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="ml-10 mt-3">Projects Page </h1>
      <div style={{position:"absolute", right:"-1100px", top:"10px"}}>Total Projects : {data.length}</div>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
          </div>
          <div className={`${styles.grid_item}`}>Title</div>
          <div className={`${styles.grid_item}`}>Type</div>
          <div className={`${styles.grid_item}`}>Funding Agency</div>
          <div className={`${styles.grid_item}`}>Organization</div>
          <div className={`${styles.grid_item}`}>Link</div>
        </div>
        {data.map((item, idx) => {
          return (
            <ProjectItem
              key={idx}
              idx={idx}
              type={item["Type"]}
              title={item["Title"]}
              agency={item["FundingAgency"]}
              organization={item["Organization"]}
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

