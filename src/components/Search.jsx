import { useState, useEffect } from "react";

export default function Search({ setAnimes }) {
  useEffect(() => {
    async function fetchInfo() {
      const tmp = await fetch(
        "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&limit=25"
      );
      const res = await tmp.json();
      console.log(res.data);
      setAnimes(res.data);
    }
    fetchInfo();
  }, []);

  return <div></div>;
}
