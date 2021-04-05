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
        <CopyBadge content={copyChars()}>Char Count</CopyBadge>
      </div>
      <div>
        {Object.keys(chars)
          .sort()
          .map((c, i) => {
            return (
              <tr key={i}>
                <td>{c === " " ? "<space>" : c}</td>
                <td>{chars[c]}</td>
              </tr>
            );
          })}
      </div>
    </Card.Body>
  );
}
