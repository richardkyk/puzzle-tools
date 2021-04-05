import React from "react";
import { Card, Badge } from "react-bootstrap";
import useCaesarShift from "./../hooks/useCaesarShift";

export default function CaesarShift({ string }) {
  const results = useCaesarShift(string);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Caesar Shift</Card.Title>
        {results.map((result, i) => {
          return (
            <div key={i}>
              <Badge pill variant="primary" className="caesar-shift">
                Shift {i + 1}
              </Badge>
              {result}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}
