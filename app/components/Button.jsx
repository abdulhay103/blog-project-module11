"use client";
import React from "react";
import styles from "./componets.module.css";

const Button = ({ children, handler }) => {
  return (
    <button onClick={() => handler()} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
