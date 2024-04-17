import styles from "./resultitem.module.css";
export default function ResultItem({ result }) {
  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={result.images.jpg.image_url}
        alt={result.images.webp.image_url}
      />
      <div className={styles.itemTitle}>
        <h1>{result.title}</h1>
      </div>
    </div>
  );
}
