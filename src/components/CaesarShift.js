import React from "react";
import { Card } from "react-bootstrap";
import useCaesarShift from "./../hooks/useCaesarShift";
import CopyBadge from "./CopyBadge";
import useEnglishRanking from "./../hooks/useEnglishRanking";

export default function CaesarShift({ string }) {
  const results = useCaesarShift(string);
  const rankedResults = useEnglishRanking(results);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Caesar Shift</Card.Title>
        {rankedResults.map((result, i) => {
          return (
            <div key={i}>
              <CopyBadge className="caesar-shift" content={result.value}>
                Shift {result.shift}
              </CopyBadge>
              {result.value}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}
