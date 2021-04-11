import React from "react";
import { Card } from "react-bootstrap";
import usePickOneSkipN from "./../hooks/usePickOneSkipN";
import CopyBadge from "./CopyBadge";
import useEnglishRanking from "./../hooks/useEnglishRanking";

export default function PickOneSkipN({ string }) {
  const results = usePickOneSkipN(string, 9);
  const rankedResults = useEnglishRanking(results);

  return (
    <Card className="m-2 mb-3" border="primary">
      <Card.Header>Pick one skip n</Card.Header>
      <Card.Body>
        <table>
          <tbody>
            {rankedResults.map((result, i) => {
              return (
                <tr key={i}>
                  <td>
                    <CopyBadge
                      className="pick-one-skip-n"
                      content={result.value}
                    >
                      Skip {result.skip}
                    </CopyBadge>
                  </td>
                  <td className="content">{result.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}
