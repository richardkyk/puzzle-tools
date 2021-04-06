import { useEffect, useState } from "react";
import { bigrams } from "../services/bigrams";

// takes in an array of objects
// [ {value: ""}]

// and returns a sorted array of objects
// [ {value: "", score: 0}]
export default function useEnglishRanking(stringList) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const rankedList = [];
    for (const string of stringList) {
      // select bigram from string
      const formattedString = string.value.match(/[a-z]/gi) ?? "";
      let score = 0;
      for (let i = 0; i < formattedString.length - 1; i++) {
        const bigram = formattedString
          .slice(i, i + 2)
          .join("")
          .toLowerCase();
        score += bigrams[bigram] ?? 0;
      }
      rankedList.push({ ...string, score });
    }
    setResult(rankedList);
  }, [stringList]);
  return result.sort((a, b) => b.score - a.score);
}
