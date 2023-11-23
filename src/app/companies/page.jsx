import React from "react";
import data from "@data/companies";
import styles from "./page.module.css";
import CompanyCard from "../../components/CompanyCard";

const CompaniesPage = () => {
  return (
    <div>
      <h1 className="ml-10 mt-3"> Companies Working on DNA Computing </h1>
      <div className={`${styles.container}`}>
        {data.map((item,idx)=>{
          return (
              <CompanyCard 
                key = {idx}
                idx = {idx}
                path = {item.path}
                description={item.Description}
                organization={item.Organization}
                type={item.Type}
              />
          )
        })}
      </div>
    </div>
  );
};

export default CompaniesPage;
