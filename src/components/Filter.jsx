import Dropdown from "./dropdown/Dropdown";
import DropdownItem from "./dropdown/DropdownItem";
import styles from "./filter.module.css";

export default function Filter({ setFilter }) {
  const items = [1, 2, 3];
  return (
    <div className={styles.content}>
      <Dropdown
        buttonText="Dropdown button"
        content={
          <>
            {items.map((item) => (
              <DropdownItem key={item}>{`Item ${item}`}</DropdownItem>
            ))}
          </>
        }
      ></Dropdown>
    </div>
  );
}
