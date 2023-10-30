import React from "react";
import data from "@data/projects";
import ProjectItem from "../../components/ProjectItem";
import styles from "./page.module.css";

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="ml-10">Projects Page </h1>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
            <input type="checkbox" className={`${styles.checkbox}`} />
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
              agency={item["Funding Agency"]}
              organization={item["Organization"]}
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
