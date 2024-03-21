import React from "react";

import { range } from "../../utils.js";
import { MAX_GUESSES } from "../../constants.js";

import Guess from "../Guess";

function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(MAX_GUESSES).map((i) => (
        <Guess key={i} guess={guessList[i]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
