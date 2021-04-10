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
    <Card className="m-2 mb-3" border="primary">
      <Card.Header>Statistics</Card.Header>
      <Card.Body>
        <table>
          <tbody>
            <tr>
              <td>
                <CopyBadge className="statistics" content={stringLength}>
                  Length
                </CopyBadge>
              </td>
              <td>{stringLength}</td>
            </tr>
            <tr>
              <CharacterCount chars={charCount} />
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}
