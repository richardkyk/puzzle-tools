import React from "react";
import { Card } from "react-bootstrap";
import useCaesarShift from "./../hooks/useCaesarShift";
import CopyBadge from "./CopyBadge";
import useEnglishRanking from "./../hooks/useEnglishRanking";

export default function CaesarShift({ string }) {
  const results = useCaesarShift(string);
  const rankedResults = useEnglishRanking(results);

  return (
    <Card className="m-2 mb-3" border="primary">
      <Card.Header>Caesar Shift</Card.Header>
      <Card.Body>
        <table>
          <tbody>
            {rankedResults.map((result, i) => {
              return (
                <tr key={i}>
                  <td>
                    <CopyBadge className="caesar-shift" content={result.value}>
                      Shift {result.shift}
                    </CopyBadge>
                  </td>
                  <td>{result.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}
