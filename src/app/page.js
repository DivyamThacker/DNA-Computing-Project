"use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Image from 'next/image'
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div style={{ position: "absolute", zIndex: "-1" }}>
      <div
        style={{
          background:
            "url('https://i0.wp.com/www.ritubiology.com/wp-content/uploads/2016/06/DNA-HD-Wallpaper-1.jpg?ssl=1 ')", //https://today.ucsd.edu/news_uploads/_social/iStock-Credit-Nobi_Prizue-1200-628-5-17-23.jpg
          height: "679px",
          width: "1519px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 739px",
          // transform: "rotate(180deg)"
          // opacity:"0.9",
        }}
        className="m-0 p-0"
      >
        <div
          style={{
            color: "black",
            zIndex: "2",
            position: "absolute",
            top: "300px",
            marginLeft: "50px",
            fontSize: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "55px",
              fontWeight: "bold",
              fontFamily: "'Lora', serif",
            }}
          >
            DNA Computing
          </h1>
          <p style={{ fontFamily: "'Lora', serif" }}>
            Conventional computers simply cannot keep pace with modern data
            creation.
          </p>
          <p style={{ fontFamily: "'Lora', serif" }}>
            {" "}
            DNA Computing is an emerging branch of unconventional computing that
            performs{" "}
          </p>
          <p style={{ fontFamily: "'Lora', serif" }}>
            computations using biological molecules, rather than traditional
            electronic computing.
          </p>
        </div>
      </div>
      <div
        className={styles.gridContainer}
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className={styles.gridItem}>
          <h1
            className={styles.gridLeftItem}
          >
            What is DNA Computing?
          </h1>
        </div>
        <div className={styles.gridItem}>
          <h1
            className={styles.gridRightItem}
          >
            DNA has been selected by nature to store and compute its most
            precious data
          </h1>
          <p className={styles.gridPara}>
            In nature, necessary information for life to function and survive is
            stored in DNA. Not only does it serve as the data storage medium of
            life; it also serves in part as memory and processor of that data,
            all in one ultra-dense, stable, form factor. DNA Computing is an
            area of natural computing based on the concept of performing logical
            and arithmetic operations using molecular properties of DNA by
            replacing traditional carbon/silicon chips with biochips. This
            allows massive parallel computation, where complex mathematical
            equations or problems can be solved in much less time.
          </p>
        </div>
        <div className={styles.gridItem}>
          <h1
            className={styles.gridLeftItem}
          >
            History of DNA Computing
          </h1>
        </div>
        <div className={styles.gridItem}>
          <h1
            className={styles.gridRightItem}
          >
            Solving the travelling salesman problem using DNA fragments
          </h1>
          <p className={styles.gridPara}>
            In 1994, Leonard Adleman presented the first prototype of a DNA
            Computer. He managed to solve an instance of the Hamiltonian path
            problem also known as the “traveling salesman problem”. The salesman
            in this problem needs to find the shortest distance between seven
            cities whose distances are known in such a way that he crosses no
            city twice and returns to the original city. Adleman for this
            purpose created seven different DNA fragments, each representing a
            city to be visited. All fragments were capable of linking with each
            other, and when they were put in a tube and mixed, through natural
            bonding tendencies the DNA created 109 formations or solutions in
            less than a second. Not all were correct though, he took a week to
            extrapolate and filter out the shortest path.
          </p>
        </div>
        <div className={styles.gridItem}>
          <h1
            className={styles.gridLeftItem}
          >
            Future Applications
          </h1>
        </div>
        <div className={styles.gridItem}>
          <h1
            className={styles.gridRightItem}
          >
            Future of data storage and complex computations
          </h1>
          <p className={styles.gridPara}>
            DNA Computing is still at its infant stage since its emergence.
            Multiple aspects of DNA computing have been studied but most of the
            research results have not been applied to reality. It has been
            proved to exhibit high data storage density and support efficient
            random data access. It also shows the potential to provide
            alternative facilities for general computing. Some of it future
            applications are Digital Signal Processing, Pattern Recognition,
            Data Comparisons, Solving Intractable Computational Problems.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

