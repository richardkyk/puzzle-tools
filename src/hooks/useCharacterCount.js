import { useEffect, useState } from "react";

export default function useCharacterCount(string) {
  const [charCount, setCharCount] = useState({});

  useEffect(() => {
    const stats = {};
    for (const char of string) {
      if (char in stats) {
        stats[char] += 1;
      } else {
        stats[char] = 1;
      }
    }
    setCharCount(stats);
  }, [string]);

  return charCount;
}
