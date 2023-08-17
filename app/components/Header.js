"use client";
import React from "react";
import navData from "../utils/navData";
import Link from "next/link";
import styles from "./componets.module.css";
import { useParams, usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href={"/"}>Logo</Link>
        </div>
        <div className={styles.links}>
          {navData.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                className={
                  isActive
                    ? " text-orange-600 underline underline-offset-2"
                    : " text-green-600"
                }
                href={link.href}
                key={link.id}
              >
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
