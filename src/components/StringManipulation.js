import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CopyBadge from "./CopyBadge";

export default function UpperCase({ string }) {
  const [toUpper, setToUpper] = useState("");
  const [upperOnly, setUpperOnly] = useState("");
  const [toLower, setToLower] = useState("");
  const [lowerOnly, setLowerOnly] = useState("");
  const [noAlphanumeric, setNoAlphanumeric] = useState("");
  const [alphanumericOnly, setAlphanumericOnly] = useState("");

  const [uniqueChars, setUniqueChars] = useState("");
  const [evenChars, setEvenChars] = useState("");
  const [oddChars, setOddChars] = useState("");
  const [reversed, setReversed] = useState("");
  const [ordered, setOrdered] = useState("");
  const [nonUniqueChars, setNonUniqueChars] = useState("");

  const items = [
    { name: "To uppercase", value: toUpper },
    { name: "Uppercase only", value: upperOnly },
    { name: "To lowercase", value: toLower },
    { name: "Lowercase only", value: lowerOnly },
    { name: "Alphanumeric only", value: noAlphanumeric },
    { name: "Non-alphanumeric", value: alphanumericOnly },
    { name: "Unique chars", value: uniqueChars },
    { name: "Non-unique chars", value: nonUniqueChars },
    { name: "Even chars", value: evenChars },
    { name: "Odd chars", value: oddChars },
    { name: "Reversed", value: reversed },
    { name: "Ordered", value: ordered },
  ];

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    setToUpper(string.toUpperCase());
    setToLower(string.toLowerCase());
    setUpperOnly(string.match(/[A-Z]/g));
    setLowerOnly(string.match(/[a-z]/g));
    setNoAlphanumeric(string.match(/[a-z0-9]/gi));
    setAlphanumericOnly(string.match(/[^a-z0-9]/gi));
    setUniqueChars(string.split("").filter(onlyUnique));
    setNonUniqueChars(
      string
        .split("")
        .filter((value, index, self) => !onlyUnique(value, index, self))
        .filter(onlyUnique)
    );

    setEvenChars(string.split("").filter((_, i) => i % 2 === 1));
    setOddChars(string.split("").filter((_, i) => i % 2 === 0));
    setReversed(string.split("").reverse());
    setOrdered(string.split("").sort());
  }, [string]);
  return (
    <Card className="m-2 mb-3" border="primary">
      <Card.Header>String Manipulation</Card.Header>
      <Card.Body style={{ overflow: "hidden" }}>
        <table>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.name}>
                  <td>
                    <CopyBadge
                      className="string-manipulation"
                      content={item.value}
                    >
                      {item.name}
                    </CopyBadge>
                  </td>
                  <td className="content">{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}
