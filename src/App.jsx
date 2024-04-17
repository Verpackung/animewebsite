import { useState } from "react";
import Search from "./components/Search";
import AnimeList from "./components/ResultList";
import Nav from "./components/Nav";
import "./App.css";
import FilterBar from "./components/FilterBar";

function App() {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("airing");
  const [media, setMedia] = useState("anime");

  return (
    <div className="App">
      <Nav />
      <FilterBar setMedia={setMedia} setFilter={setFilter} />

      <Search setResults={setResults} filter={filter} media={media} />
      <AnimeList results={results} />
    </div>
  );
}

export default App;
