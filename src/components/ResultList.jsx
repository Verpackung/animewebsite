import ResultItem from "./ResultItem";

export default function ResultList({ results }) {
  return (
    <div>
      {results.map((result) => (
        <ResultItem key={result.mal_id} result={result} />
      ))}
    </div>
  );
}
