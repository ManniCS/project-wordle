import React from "react";

import { range } from "../../utils.js";
import { MAX_WORD_LENGTH } from "../../constants.js";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(MAX_WORD_LENGTH).map((i) => (
        <span key={i} className="cell">
          {guess ? guess[i] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
