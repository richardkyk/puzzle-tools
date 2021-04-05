import { useEffect, useState } from "react";

export default function useCaesarShift(string) {
  const [results, setResults] = useState([]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const output = [];
    for (let i = 1; i <= 26; i++) {
      let out = "";
      for (const char of string) {
        if (alphabet.includes(char.toUpperCase())) {
          const index =
            (alphabet.indexOf(char.toUpperCase()) + i) % alphabet.length;
          out +=
            char.toUpperCase() === char
              ? alphabet[index]
              : alphabet[index].toLowerCase();
        } else {
          out += char;
        }
      }
      output.push(out);
    }
    setResults(output);
  }, [string, alphabet]);
  return results;
}
