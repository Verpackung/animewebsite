import { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import DropdownItem from "./dropdown/DropdownItem";
import styles from "./filter.module.css";

export default function Filter({ setFilter }) {
  const items = ["Airing", "Completed", "Not Yet Aired"];
  const [buttonText, setButtonText] = useState("Airing");

  const handleClick = (e) => {
    const clickedFilter = e.target.outerText;
    setButtonText(clickedFilter);
  };

  return (
    <div className={styles.content}>
      <Dropdown
        buttonText={buttonText}
        content={
          <>
            {items.map((item) => (
              <DropdownItem key={item} onClick={(e) => handleClick(e)}>
                {item}
              </DropdownItem>
            ))}
          </>
        }
      ></Dropdown>
    </div>
  );
}
