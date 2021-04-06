import React from "react";
import { Card } from "react-bootstrap";
import usePickOneSkipN from "./../hooks/usePickOneSkipN";
import CopyBadge from "./CopyBadge";
import useEnglishRanking from "./../hooks/useEnglishRanking";

export default function PickOneSkipN({ string }) {
  const results = usePickOneSkipN(string, 9);
  const rankedResults = useEnglishRanking(results);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Pick one skip n</Card.Title>
        {rankedResults.map((result, i) => {
          return (
            <div key={i}>
              <CopyBadge className="pick-one-skip-n" content={result.value}>
                Skip {result.skip}
              </CopyBadge>
              {result.value}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}
