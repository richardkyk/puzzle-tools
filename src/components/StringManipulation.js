import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CopyBadge from "./CopyBadge";

export default function UpperCase({ string }) {
  const [toUpper, setToUpper] = useState("");
  const [toLower, setToLower] = useState("");
  const [upperOnly, setUpperOnly] = useState("");
  const [lowerOnly, setLowerOnly] = useState("");
  const [noPunctuation, setNoPunctuation] = useState("");
  const [uniqueChars, setUniqueChars] = useState("");

  const items = [
    { name: "To uppercase", value: toUpper },
    { name: "To lowercase", value: toLower },
    { name: "Uppercase only", value: upperOnly },
    { name: "Lowercase only", value: lowerOnly },
    { name: "No punctuation", value: noPunctuation },
    { name: "Unique", value: uniqueChars },
  ];

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    setToUpper(string.toUpperCase());
    setToLower(string.toLowerCase());
    setUpperOnly(string.match(/[A-Z]/g));
    setLowerOnly(string.match(/[a-z]/g));
    setNoPunctuation(string.match(/[a-z0-9]/gi));
    setUniqueChars(string.split("").filter(onlyUnique));
  }, [string]);
  return (
    <Card>
      <Card.Body>
        <Card.Title>String Manipulation</Card.Title>
        {items.map((item) => {
          return (
            <div key={item.name}>
              <CopyBadge className="string-manipulation" content={item.value}>
                {item.name}
              </CopyBadge>
              {item.value}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}
