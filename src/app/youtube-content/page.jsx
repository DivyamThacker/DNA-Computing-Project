import React from "react";
import data from "@data/youtube";
import YoutubeItem from "../../components/YoutubeItem";
import styles from "./page.module.css";

const YoutubePage = () => {
  return (
    <div>
      <h1 className="ml-10">Youtube Content Page </h1>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}>
            <input type="checkbox" className={`${styles.checkbox}`} />
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

export default YoutubePage;
