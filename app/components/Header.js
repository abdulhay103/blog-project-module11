import React from "react";
import navData from "../utils/navData";
import Link from "next/link";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href={"/"}>Logo</Link>
        </div>
        <div className={styles.links}>
          {navData.map((link) => {
            return (
              <Link href={link.href} key={link.id}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
