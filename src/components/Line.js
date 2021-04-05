import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
export default function Line({ initString, col, setCol, disabled }) {
  const [string, setString] = useState(initString);
  const [index, setIndex] = useState(0);

  function increment() {
    const newString = string.slice(1, string.length) + string[0];
    setIndex(mod(index + 1, string.length));
    setString(newString);
  }
  function decrement() {
    const newString =
      string[string.length - 1] + string.slice(0, string.length - 1);
    setIndex(mod(index - 1, string.length));
    setString(newString);
  }

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function toggleHover(index) {
    if (index == null) return setCol(null);
    setCol(index);
  }

  return (
    <div className="d-flex align-items-center m-2 justify-content-center">
      <ButtonGroup
        className="mr-4"
        style={{ visibility: disabled ? "hidden" : "" }}
      >
        <Button
          className="my-btn"
          size="sm"
          variant="outline-primary"
          onClick={() => decrement()}
        >
          {"<"}
        </Button>
        <Button
          size="sm"
          disabled
          variant="outline-primary"
          style={{ width: "50px" }}
        >
          {index + 1}
        </Button>
        <Button
          className="my-btn"
          size="sm"
          variant="outline-primary"
          onClick={() => increment()}
        >
          {">"}
        </Button>
      </ButtonGroup>

      {string.split("").map((letter, i) => {
        return (
          <div
            className={"letter " + (col === i ? "hover" : "")}
            key={i}
            onMouseEnter={() => toggleHover(i)}
            onMouseLeave={() => toggleHover(null)}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
}
