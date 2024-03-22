import React from "react";

import { range } from "../../utils.js";
import { MAX_WORD_LENGTH } from "../../constants.js";

function Cell({ letter, status }) {
  return (
    <span className={status ? `cell ${status}` : "cell"}>{letter || ""}</span>
  );
}

function Result({ result }) {
  return (
    <p className="guess">
      {range(MAX_WORD_LENGTH).map((i) => (
        <Cell
          key={i}
          letter={result && result[i].letter}
          status={result && result[i].status}
        />
      ))}
    </p>
  );
}

export default Result;
