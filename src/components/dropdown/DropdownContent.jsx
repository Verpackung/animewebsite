import React from "react";
import styles from "./dropdowncontent.module.css";

export default function DropdownContent({ children, open }) {
  return (
    <div
      className={`${styles.dropdownContent} ${open ? styles.contentOpen : ""}`}
    >
      {children}
    </div>
  );
}
