import React from "react";
import styles from "./dropdownitem.module.css";

export default function DropdownItem({ children, onClick }) {
  return (
    <div className={styles.dropdownItem} onClick={onClick}>
      {children}
    </div>
  );
}
