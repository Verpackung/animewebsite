import { useState, useEffect } from "react";

export default function Search({ setAnimes, filter }) {
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
      const tmp = await fetch(
        "https://api.jikan.moe/v4/top/anime?type=tv&filter=" +
          filter +
          "&limit=25"
      );
      const res = await tmp.json();
      const withoutDuplicates = filterDuplicates(res.data);
      console.log(withoutDuplicates);
      setAnimes(withoutDuplicates);
    }
    fetchInfo();
  }, [filter]);

  return <div></div>;
}
