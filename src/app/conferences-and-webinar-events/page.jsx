import React from "react";
import data from "@data/events";
import EventItem from "../../components/EventItem";
import styles from "./page.module.css";

const EventsPage = ()=>{
    return (
        <div>
          <h1 className="ml-10">Events Page </h1>
          <div className={`${styles.body}`}>
            <div className={`${styles.container} ${styles.header}`}>
              <div className={`${styles.grid_item}`}>
                <input type="checkbox" className={`${styles.checkbox}`} />
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
                  name={item["Event Name"]}
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
