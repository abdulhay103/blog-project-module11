import React from "react";
import styles from "./home.module.css";
import postData from "../app/api/getPosts.js";
import Button from "./components/Button";

const page = async () => {
  const allPosts = await postData();
  console.log(allPosts);
  return (
    <main>
      <div className={styles.sectionHeader}>
        <h1 className={styles.header}>Recent Post</h1>
      </div>
      <div>
        {allPosts.map((post) => {
          return (
            <div key={post.id} className={styles.card}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <div>
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
