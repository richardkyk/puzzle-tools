import React from "react";
import { Card } from "react-bootstrap";
import usePickOneSkipN from "./../hooks/usePickOneSkipN";
import CopyBadge from "./CopyBadge";

export default function PickOneSkipN({ string }) {
  const results = usePickOneSkipN(string, 9);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Pick one skip n</Card.Title>
        {results.map((result, i) => {
          return (
            <div key={i}>
              <CopyBadge className="pick-one-skip-n" content={result}>
                Skip {i + 1}
              </CopyBadge>
              {result}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}
