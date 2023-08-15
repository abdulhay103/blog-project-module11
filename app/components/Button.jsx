import React from "react";
import styles from "./componets.module.css";

const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
