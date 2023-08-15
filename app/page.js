"use client";
import React from "react";
import styles from "./home.module.css";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const navigator = () => {
    router.push("/blog");
  };
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
          <Button handler={navigator}>Recent Posts</Button>
        </div>
      </div>
    </main>
  );
};

export default page;
