import React from "react";
import data from "@data/blogs";
import BlogItem from "../../components/BlogItem";
import styles from "./page.module.css";

const BlogsPage = ()=>{
    return (
        <div>
          <h1 className="ml-10">Blogs Page </h1>
          <div className={`${styles.body}`}>
            <div className={`${styles.container} ${styles.header}`}>
              <div className={`${styles.grid_item}`}>
                <input type="checkbox" className={`${styles.checkbox}`} />
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
    

export default BlogsPage;
