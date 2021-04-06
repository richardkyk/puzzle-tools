import React from "react";
import { Card } from "react-bootstrap";
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
    <Card.Body className="p-0 d-flex">
      <div>
        <CopyBadge content={copyChars()}>Char count</CopyBadge>
      </div>
      <table>
        <tbody>
          {Object.keys(chars)
            .sort()
            .map((c, i) => {
              return (
                <tr key={i}>
                  <td className="pr-4">{c === " " ? "<space>" : c}</td>
                  <td className="pr-4">{chars[c]}</td>
                  <td>{"#".repeat(chars[c])}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Card.Body>
  );
}
