import { useState, useEffect } from "react";

export default function Search({ setResults, filter, media }) {
  // Need to filter duplicates because api returns identical items
  // in results which mess with the list keys
  const filterDuplicates = (inputData) => {
    const unique = [];
    const knownIds = [];
    inputData.map((data) => {
      const id = data.mal_id;
      if (!knownIds.includes(id)) {
        unique.push(data);
        knownIds.push(id);
      }
    });

    return unique;
  };

  useEffect(() => {
    async function fetchInfo() {
      const mediaType =
        media !== "anime" ? "manga?type=manga" : "anime?type=tv";
      // airing for animes == publishing for manga
      const queryFilter =
        filter == "airing" && media == "manga" ? "publishing" : filter;
      const fullQuery =
        "https://api.jikan.moe/v4/top/" +
        mediaType +
        "&filter=" +
        queryFilter +
        "&limit=25";
      const tmp = await fetch(fullQuery);
      const res = await tmp.json();
      const withoutDuplicates = filterDuplicates(res.data);
      setResults(withoutDuplicates);
    }
    fetchInfo();
  }, [filter, media]);

  return <div></div>;
}
