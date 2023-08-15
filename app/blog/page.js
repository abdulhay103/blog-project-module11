import React from "react";
import styles from "./blog.module.css";
import postData from "../api/getPosts.js";
import Button from "../components/Button";
import Link from "next/link";

const page = async () => {
  const allPosts = await postData();
  console.log(allPosts);
  return (
    <main>
      <div className={styles.sectionHeader}>
        <h1 className={styles.header}>Recent Post</h1>
      </div>
      <div className={styles.postArea}>
        {allPosts.map((post) => {
          return (
            <div key={post.id} className={styles.card}>
              <Link href={"#"} className={styles.cardTitle}>{post.title}</Link>
              <p>{post.body}</p>
              <div className={styles.cardBtn}>
                <Button>Read More</Button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default page;
