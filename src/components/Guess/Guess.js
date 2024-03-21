import React from "react";

import { range } from "../../utils.js";
import { MAX_WORD_LENGTH } from "../../constants.js";
import { checkGuess } from "../../game-helpers.js";

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(MAX_WORD_LENGTH).map((i) => {
        let className = guess ? `cell ${guessResult[i].status}` : "cell";
        return (
          <span key={i} className={className}>
            {guess ? guessResult[i].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
