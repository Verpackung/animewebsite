import { useState } from "react";
import Search from "./components/Search";
import AnimeList from "./components/AnimeList";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [animes, setAnimes] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search setAnimes={setAnimes} />
      <AnimeList animes={animes} />
    </div>
  );
}

export default App;
