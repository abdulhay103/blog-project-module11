"use client";
import React from "react";
import styles from "./blog.module.css";
import postData from "../api/getPosts.js";
import Button from "../components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = async () => {
  const allPosts = await postData();
  const btnNavigate = (id) => {
    const route = useRouter();
    route.push(`/blog/${id}`);
  };

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
              {/* <Button
                handler={() => {
                  btnNavigate(post.id);
                }}
              >
                Read More
              </Button> */}
              {/* <Button handler={() => useRouter().push(`/blog/${post.id}`)}>
                Read More
              </Button> */}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default page;
