"use client"
import React from "react";
// import data from "@data/courses";
import CourseItem from "../../components/CourseItem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function CoursesPage(){
const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL + "api/Courses"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data);
    };

    fetchData();
  }, []);
    return (
        <div>
          <h1 className="ml-10 mt-3">Courses Page </h1>
          <div className={`${styles.body}`}>
            <div className={`${styles.container} ${styles.header}`}>
              <div className={`${styles.grid_item}`}>
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

