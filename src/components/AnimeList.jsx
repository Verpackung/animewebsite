import AnimeItem from "./AnimeItem";

export default function AnimeList({ animes }) {
  return (
    <div>
      {animes.map((anime) => (
        <AnimeItem key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}
