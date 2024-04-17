import React, { useState } from "react";
import styles from "./dropdown.module.css";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

export default function Dropdown({ buttonText, content }) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((open) => !open);
  };

  return (
    <div className={styles.dropdown}>
      <DropdownButton toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  );
}
