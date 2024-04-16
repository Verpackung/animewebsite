import styles from "./animeitem.module.css";
export default function AnimeItem({ anime }) {
  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={anime.images.jpg.image_url}
        alt={anime.images.webp.image_url}
      />
      <div className={styles.itemTitle}>
        <h1>{anime.title}</h1>
      </div>
    </div>
  );
}
