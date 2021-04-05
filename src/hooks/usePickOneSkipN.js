import { useEffect, useState } from "react";
import { mod } from "./../services/helper";

export default function usePickOneSkipN(string, n) {
  // picks one char, skips (n-2) chars, repeats until all chars are consumed
  const [results, setResults] = useState([]);
  useEffect(() => {
    const output = [];
    for (let j = 2; j < n; j++) {
      let tempString = string;
      let out = "";
      let i = 0;
      while (tempString.length > 0) {
        i = mod(i, tempString.length);
        out += tempString[i];
        tempString = tempString.slice(0, i) + tempString.slice(i + 1);
        i += j - 1;
      }
      output.push(out);
    }
    setResults(output);
  }, [string, n]);
  return results;
}
