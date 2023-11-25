"use client"
import React from "react";
// import data from "@data/simulation_tools";
import SimulationItem from "../../components/SimulationItem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ToolsPage(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_VERCEL_URL + "api/SimulationTools"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="ml-10 mt-3">Simulation and Tools Page </h1>
      <div style={{position:"absolute", right:"-1100px", top:"10px"}}>Total Simulation tools : {data.length}</div>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
          </div>
          <div className={`${styles.grid_item}`}>Name</div>
          <div className={`${styles.grid_item}`}>Type</div>
          <div className={`${styles.grid_item}`}>Link</div>
        </div>
        {data.map((item, idx) => {
          return (
            <SimulationItem
              key={idx}
              idx={idx}
              type={item["Type"]}
              name={item["Name"]}
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

