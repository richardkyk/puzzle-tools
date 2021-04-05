import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CopyBadge from "./CopyBadge";
import useCharacterCount from "./../hooks/useCharacterCount";
import CharacterCount from "./CharacterCount";

export default function Statistics({ string }) {
  const [stringLength, setStringLength] = useState(0);
  const charCount = useCharacterCount(string);

  useEffect(() => {
    setStringLength(string.length);
  }, [string]);
  return (
    <Card>
      <Card.Body>
        <Card.Title>Statistics</Card.Title>
        <div>
          <CopyBadge className="statistics" content={stringLength}>
            Length
          </CopyBadge>
          {stringLength}
        </div>
        <div>
          <CharacterCount chars={charCount} />
        </div>
      </Card.Body>
    </Card>
  );
}
