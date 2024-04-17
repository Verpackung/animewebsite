import React from "react";
import styles from "./filterbar.module.css";
import Media from "./Media";
import Filter from "./Filter";

export default function FilterBar({ setMedia, setFilter }) {
  return (
    <div className={styles.container}>
      <Media setMedia={setMedia} />
      <Filter setFilter={setFilter} />
    </div>
  );
}
