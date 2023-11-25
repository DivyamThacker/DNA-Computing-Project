"use client"
// import data from "@data/articles_papers";
import axios from "axios";
import ArticleItem from "../../components/ArticleItem";
import styles from "./page.module.css";
import React, {useState, useEffect} from "react";

// async function getData() {
//   const res = await fetch(process.env.URL+'api/ResearchPapers')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json();
// }

export default function ResearchPapersPage() {
  // const {result : data} = await getData();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_VERCEL_URL + "api/ResearchPapers"
      );
      const data = await response.json();
      setData(data.result);
    };

    fetchData();
  }, []);
  return (
    <div>
    <div style={{display:"flex",justifyContent:"center"}}>
      <h1 className={`ml-10 ${styles.prevent_select} mt-3`}  >
        Articles and Papers {" "}
      </h1>
      <div style={{position:"absolute", right:"-1100px", top:"10px"}}>Total Articles : {data.length}</div>
    </div>
      <div className={`${styles.body}`}>
        <div className={`${styles.container} ${styles.header}`}>
          <div className={`${styles.grid_item}`}></div>
          <div className={`${styles.grid_item}`}>Title</div>
          <div className={`${styles.grid_item}`}>Topics</div>
          <div className={`${styles.grid_item}`}>Type</div>
          <div className={`${styles.grid_item}`}>Authors</div>
          <div className={`${styles.grid_item}`}>Published Date</div>
          <div className={`${styles.grid_item}`}>Source</div>
          <div className={`${styles.grid_item}`}>Link</div>
        </div>
        {data.map((item, idx) => {
          return (
            <ArticleItem
              key={idx}
              idx={idx}
              type={item["Type"]}
              source={item["Source"]}
              title={item["Title"]}
              topics={item["Topics"]}
              authors={item["Authors"]}
              publishedDate={item["PublishedDate"]}
              link={item["Link"]}
            />
          );
        })}
      </div>
    </div>
  );
};
