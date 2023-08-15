import React from "react";
import styles from "./home.module.css";
import Button from "./components/Button";

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
        <Button>Recent Posts</Button>
        </div>
      </div>
    </main>
  );
};

export default page;
