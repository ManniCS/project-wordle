import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import ResultsList from "../ResultsList";
import Banner from "../Banner";

import { checkGuess } from "../../game-helpers.js";

import { MAX_GUESSES } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [gameState, setGameState] = React.useState("in play");

  function addGuess(guess) {
    const result = checkGuess(guess, answer);
    const newResults = [...results, result];
    setResults(newResults);
    if (guess === answer) {
      setGameState("won");
    } else if (newResults.length >= MAX_GUESSES) {
      setGameState("lost");
    }
  }

  return (
    <>
      <Banner
        gameState={gameState}
        answer={answer}
        numGuesses={results.length}
      />
      <ResultsList results={results} />
      <GuessInput gameState={gameState} addGuess={addGuess} />
    </>
  );
}

export default Game;
