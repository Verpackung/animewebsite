import { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import DropdownItem from "./dropdown/DropdownItem";
import styles from "./filter.module.css";

export default function Filter({ setFilter }) {
  const filters = ["Airing", "Completed", "Not Yet Aired"];
  const filtersByKey = {
    Airing: "airing",
    Completed: "bypopularity",
    "Not Yet Aired": "upcoming",
  };
  const [buttonText, setButtonText] = useState("Airing");

  const handleClick = (e) => {
    const clickedFilter = e.target.outerText;
    setButtonText(clickedFilter);
    setFilter(filtersByKey[clickedFilter]);
    console.log("filter set to " + clickedFilter);
  };

  return (
    <div className={styles.content}>
      <Dropdown
        buttonText={buttonText}
        content={
          <>
            {filters.map((filter) => (
              <DropdownItem key={filter} onClick={(e) => handleClick(e)}>
                {filter}
              </DropdownItem>
            ))}
          </>
        }
      ></Dropdown>
    </div>
  );
}
