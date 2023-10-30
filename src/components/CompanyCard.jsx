'use client';
import {Card,CardHeader,CardBody,CardFooter,Typography,Button,Dialog,DialogHeader,DialogBody,DialogFooter} from "@material-tailwind/react";
import styles from "../app/companies/page.module.css";
import { useState } from "react";

 
const CompanyCard = (props)=> {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  
  return (
    <Card className="mt-10 w-96 border-4 ">
      <CardHeader color="blue-gray" className="relative h-45">
        <img
          src={props.path}
          alt="Company Logo"
          className="px-2"
          style={{width:"370px",height:"180px"}}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-0 px-2">
          {props.organization}
        </Typography>
        <div className={` ${styles.tooltip} px-2`}>
        <span className={`${styles.tooltiptext}`}>{props.description}</span>
        {props.description.length > 80
          ? `${props.description.substr(0, 80)}...`
          : props.description}
      </div>
      </CardBody>
      <CardFooter className="pt-0">
      <button
            type="button"
            className=" ml-5 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Read More
          </button>
      </CardFooter>
    </Card>
  );
}

export default CompanyCard;