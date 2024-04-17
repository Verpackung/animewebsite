import React from "react";
import styles from "./dropdownbutton.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function DropdownButton({ children, open, toggle }) {
  return (
    <div
      onClick={toggle}
      className={`${styles.dropdownButton} ${open ? styles.buttonOpen : ""}`}
    >
      {children}
      <span className={styles.toggleIcon}>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </div>
  );
}
