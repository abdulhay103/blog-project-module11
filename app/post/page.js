import React from "react";
import postData from "../api/getPosts.js";
import styles from "@/app/blog/blog.module.css";
import Link from "next/link";
const page = async () => {
  const allPosts = await postData();

  return (
    <main>
      <div className={styles.sectionHeader}>
        <h1 className={styles.header}>Recent Post</h1>
      </div>
      <div className={styles.postArea}>
        {allPosts.map((post) => {
          return (
            <div key={post.id} className={styles.card}>
              <Link href={`/post/${post.id}`} className={styles.cardTitle}>
                {post.title.slice(0, 30)}
              </Link>
              <p>{post.body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default page;
