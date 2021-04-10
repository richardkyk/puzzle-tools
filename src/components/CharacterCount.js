import React from "react";
import CopyBadge from "./CopyBadge";

export default function CharacterCount({ chars }) {
  function copyChars() {
    let out = "";
    Object.keys(chars)
      .sort()
      .map((c) => {
        return (out += `${c}\t${chars[c]}\n`);
      });
    return out;
  }

  return (
    <>
      <td style={{ overflowWrap: "break-word" }}>
        <CopyBadge content={copyChars()}>Char count</CopyBadge>
      </td>
      <td>
        <table>
          <tbody>
            {Object.keys(chars)
              .sort()
              .map((c, i) => {
                return (
                  <tr key={i}>
                    <td className="pr-4">
                      {c === " "
                        ? "<space>"
                        : c === "\t"
                        ? "<tab>"
                        : c === "\r"
                        ? "<return>"
                        : c === "\n"
                        ? "<newline>"
                        : c === "\v"
                        ? "<vertical tab>"
                        : c === "\f"
                        ? "<formfeed>"
                        : c}
                    </td>
                    <td className="pr-4">{chars[c]}</td>
                    <td>{"#".repeat(chars[c])}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </td>
    </>
  );
}
