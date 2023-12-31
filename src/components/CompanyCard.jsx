"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import styles from "../app/companies/page.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const CompanyCard = (props) => {
  const [dialogOpen, setDialog] = useState(false);

  return (
    <Card
      className="mt-10 w-96 border-4 "
      style={{ display: "flex", flexDirection: "column" , }}
    >
      <CardHeader color="blue-gray" className="relative h-45" >
        {/* <img
          src={props.path}
          alt="Company Logo"
          className="px-2"
          style={{ width: "370px", height: "180px" }}
        /> */}
        <Image
          src={props.path}
          alt="Company Logo"
          className="px-2"
          width={370}
          height={180}
          priority
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-0 px-2">
          {props.organization}
        </Typography>
        <div className="px-2">
          {props.description.length > 80
            ? `${props.description.substr(0, 80)}...`
            : props.description}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <div className={` ${styles.tooltip} px-2`}>
          <span
            className={
              dialogOpen
                ? `${styles.show} ${styles.tooltiptext}`
                : `${styles.tooltiptext}`
            }
          >
            <div
              className="font-bold"
              style={{ backgroundColor: "rgb(236, 236, 236)" }}
            >
              {props.organization}
            </div>
            {props.description}{" "}
            <div>
              <button
                type="button"
                onClick={() => setDialog(false)}
                className="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Cancel
              </button>
            </div>
          </span>
          <div >
            <button
              type="button"
              onClick={() => setDialog(true)}
              className="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Read More
            </button>
            <Link href={props.link} style={{color:"blue", borderBottom:"1px solid blue",  marginLeft:"10rem"}}>Visit</Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
