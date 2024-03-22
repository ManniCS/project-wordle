import React from "react";

import { range } from "../../utils.js";
import { MAX_GUESSES } from "../../constants.js";

import Result from "../Result/index.js";

function ResultsList({ results }) {
  return (
    <div className="guess-results">
      {range(MAX_GUESSES).map((i) => (
        <Result key={i} result={results[i]} />
      ))}
    </div>
  );
}

export default ResultsList;
