import { useState } from "react";
import Search from "./components/Search";
import AnimeList from "./components/AnimeList";
import Nav from "./components/Nav";
import "./App.css";
import Filter from "./components/Filter";

function App() {
  const [animes, setAnimes] = useState([]);
  const [filter, setFilter] = useState("airing");

  return (
    <div className="App">
      <Nav />
      <Filter setFilter={setFilter} />
      <Search setAnimes={setAnimes} filter={filter} />
      <AnimeList animes={animes} />
    </div>
  );
}

export default App;
