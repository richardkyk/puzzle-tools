import React from "react";
import { Card } from "react-bootstrap";
import useCaesarShift from "./../hooks/useCaesarShift";
import CopyBadge from "./CopyBadge";

export default function CaesarShift({ string }) {
  const results = useCaesarShift(string);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Caesar Shift</Card.Title>
        {results.map((result, i) => {
          return (
            <div key={i}>
              <CopyBadge
                pill
                variant="primary"
                className="caesar-shift"
                content={result}
              >
                Shift {i + 1}
              </CopyBadge>
              {result}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}
