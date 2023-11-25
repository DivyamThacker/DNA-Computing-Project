"use client"
import React from "react";
// import data from "@data/events";
import EventItem from "../../components/EventItem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

const EventsPage = ()=>{
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_VERCEL_URL + "api/Events"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data);
    };

    fetchData();
  }, []);
    return (
        <div>
          <h1 className="ml-10 mt-3">Events Page </h1>
          <div style={{position:"absolute", right:"-1100px", top:"10px"}}>Total Events : {data.length}</div>
          <div className={`${styles.body}`}>
            <div className={`${styles.container} ${styles.header}`}>
              <div className={`${styles.grid_item}`}>
              </div>
              <div className={`${styles.grid_item}`}>Event Name</div>
              <div className={`${styles.grid_item}`}>Type</div>
              <div className={`${styles.grid_item}`}>Organizations</div>
              <div className={`${styles.grid_item}`}>Link</div>
            </div>
            {data.map((item, idx) => {
              return (
                <EventItem
                  key={idx}
                  idx={idx}
                  name={item["EventName"]}
                  type={item["Type"]}
                  organizations={item["Organization"]}
                  link={item["Link"]}
                />
              );
            })}
          </div>
        </div>
      );
    };

export default EventsPage;
