import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";

export default function UpperCase({ string }) {
  const [toUpper, setToUpper] = useState("");
  const [toLower, setToLower] = useState("");
  const [upperOnly, setUpperOnly] = useState("");
  const [lowerOnly, setLowerOnly] = useState("");
  const [noPunctuation, setNoPunctuation] = useState("");
  const [uniqueChars, setUniqueChars] = useState("");

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
        <div>
          <Badge pill variant="primary" className="string-manipulation">
            To uppercase
          </Badge>
          {toUpper}
        </div>
        <div>
          <Badge pill variant="primary" className="string-manipulation">
            To lowercase
          </Badge>
          {toLower}
        </div>
        <div>
          <Badge pill variant="primary" className="string-manipulation">
            Uppercase only
          </Badge>
          {upperOnly}
        </div>
        <div>
          <Badge pill variant="primary" className="string-manipulation">
            Lowercase only
          </Badge>
          {lowerOnly}
        </div>
        <div>
          <Badge pill variant="primary" className="string-manipulation">
            No punctuation
          </Badge>
          {noPunctuation}
        </div>
        <div>
          <Badge pill variant="primary" className="string-manipulation">
            Unique
          </Badge>
          {uniqueChars}
        </div>
      </Card.Body>
    </Card>
  );
}
