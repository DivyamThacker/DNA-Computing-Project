"use client"
import React from "react";
// import data from "@data/youtube";
import YoutubeItem from "../../components/YoutubeItem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function YoutubePage(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_VERCEL_URL + "api/YoutubeContent"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="ml-10 mt-3">Youtube Content Page </h1>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
          </div>
          <div className={`${styles.grid_item}`}>Title</div>
          <div className={`${styles.grid_item}`}>Type</div>
          <div className={`${styles.grid_item}`}>Channel</div>
          <div className={`${styles.grid_item}`}>Link</div>
        </div>
        {data.map((item, idx) => {
          return (
            <YoutubeItem
              key={idx}
              idx={idx}
              type={item["Type"]}
              title={item["Title"]}
              channel={item["channel"]}
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

