import React from "react";
import data from "@data/courses";
import CourseItem from "../../components/CourseItem";
import styles from "./page.module.css";

const CoursesPage = ()=>{
    return (
        <div>
          <h1 className="ml-10">Courses Page </h1>
          <div className={`${styles.body}`}>
            <div className={`${styles.container} ${styles.header}`}>
              <div className={`${styles.grid_item}`}>
                <input type="checkbox" className={`${styles.checkbox}`} />
              </div>
              <div className={`${styles.grid_item}`}>Title</div>
              <div className={`${styles.grid_item}`}>Type</div>
              <div className={`${styles.grid_item}`}>Authors</div>
              <div className={`${styles.grid_item}`}>Link</div>
            </div>
            {data.map((item, idx) => {
              return (
                <CourseItem
                  key={idx}
                  idx={idx}
                  type={item["Type"]}
                  title={item["Title"]}
                  authors={item["Authors"]}
                  link={item["Link"]}
                />
              );
            })}
          </div>
        </div>
      );
    };

export default CoursesPage;
