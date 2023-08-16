"use client";
import React from "react";
import styles from "./componets.module.css";

const Button = (props) => {
  const { children, handler } = props;
  return (
    <button onClick={() => handler()} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
