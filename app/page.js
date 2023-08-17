"use client";
import React from "react";
import styles from "./home.module.css";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <div className={styles.sectionHeader}>
        <h1 className={styles.header}>Wellcome Next Blog Project</h1>
      </div>
      <div className={styles.contents}>
        <div>
          <h1>Pls click the Button bellow and show latest post</h1>
        </div>
        <div className={styles.contentsBtn}>
          <Link href="/blog">Click Me</Link>
        </div>
      </div>
    </main>
  );
};

export default page;
