"use client";
import React from "react";
import { data as companyData } from "@data/companies";
import styles from "./page.module.css";
import CompanyCard from "../../components/CompanyCard";
import { useEffect, useState } from "react";

// async function getData() {
//   const res = await fetch(process.env.NEXT_PUBLIC_URL + "api/Companies");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

function getPath() {
  data.map((item) => {
    if (!item.path || item.path.slice(0, 1) === "/") {
      companyData.map((companyItem) => {
        if (companyItem.Organization === item.Organization) {
          item.path = companyItem.path;
        }
      });
    }
  });
}

export default function CompaniesPage() {
  // const { result: data } = await getData();
  // console.log("data from backend Before : ", data);
  // getPath(data);
  // console.log("data from backend After  : ", data);
  // console.log("data from local Storage : ",companyData);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "/api/Companies"
      );
      const data = await response.json();
      setData(data.result);
      console.log("data : ", data.result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="ml-10 mt-3"> Companies Working on DNA Computing </h1>
      <div style={{position:"absolute", right:"-1100px", top:"10px"}}>Total Companies : {data.length}</div>
      <div className={`${styles.container}`}>
        {data.map((item, idx) => {
          return (
            <CompanyCard
              key={idx}
              idx={idx}
              path={item.path}
              description={item.Description}
              organization={item.Organization}
              type={item.Type}
              link={item.Link}
            />
          );
        })}
      </div>
    </div>
  );
}
