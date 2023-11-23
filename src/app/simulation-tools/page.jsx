import React from "react";
import data from "@data/simulation_tools";
import SimulationItem from "../../components/SimulationItem";
import styles from "./page.module.css";

const ToolsPage = () => {
  return (
    <div>
      <h1 className="ml-10 mt-3">Simulation and Tools Page </h1>
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

export default ToolsPage;
