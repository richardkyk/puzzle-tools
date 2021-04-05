import React from "react";
import { Badge, Card } from "react-bootstrap";
import usePickOneSkipN from "./../hooks/usePickOneSkipN";

export default function PickOneSkipN({ string }) {
  const results = usePickOneSkipN(string, 9);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Pick one skip N</Card.Title>
        {results.map((result, i) => {
          return (
            <div key={i}>
              <Badge pill variant="primary" className="pick-one-skip-n">
                Skip {i + 1}
              </Badge>
              {result}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}
