"use client"
import React from "react";
// import data from "@data/blogs";
import BlogItem from "../../components/BlogItem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
// async function getData() {
//   const res = await fetch(process.env.URL+'api/Blogs')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json();
// }

export default function BlogsPage() {
  // const {result : data} = await getData();
  // console.log(data);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL + "api/Blogs"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data);
    };

    fetchData();
  }, []);
    return (
        <div>
          <h1 className="ml-10  mt-3">Blogs Page </h1>
          <div className={`${styles.body}`}>
            <div className={`${styles.container} ${styles.header}`}>
              <div className={`${styles.grid_item}`}>
              </div>
              <div className={`${styles.grid_item}`}>Title</div>
              <div className={`${styles.grid_item}`}>Type</div>
              <div className={`${styles.grid_item}`}>Organization</div>
              <div className={`${styles.grid_item}`}>Link</div>
            </div>
            {data.map((item, idx) => {
              return (
                <BlogItem
                  key={idx}
                  idx={idx}
                  type={item["Type"]}
                  title={item["Title"]}
                  organization={item["Organization"]}
                  link={item["Link"]}
                />
              );
            })}
          </div>
        </div>
      );
    };
    

