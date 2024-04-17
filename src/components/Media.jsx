import React from "react";
import { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import DropdownItem from "./dropdown/DropdownItem";
import styles from "./media.module.css";

export default function Media({ setMedia }) {
  const media = ["Anime", "Manga"];

  const [buttonText, setButtonText] = useState("Anime");

  const handleClick = (e) => {
    const clickedMedia = e.target.outerText.toLowerCase();
    setButtonText(clickedMedia);
    setMedia(clickedMedia);
  };

  return (
    <div className={styles.content}>
      <Dropdown
        buttonText={buttonText}
        content={
          <>
            {media.map((m) => (
              <DropdownItem key={m} onClick={(e) => handleClick(e)}>
                {m}
              </DropdownItem>
            ))}
          </>
        }
      ></Dropdown>
    </div>
  );
}
