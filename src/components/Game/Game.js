import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import ResultsList from "../ResultsList";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

import { checkGuess } from "../../game-helpers.js";

import { MAX_GUESSES } from "../../constants.js";

function Game() {
  const [results, setResults] = React.useState([]);
  const [gameState, setGameState] = React.useState("in play");
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS);
    console.log({ answer });
    return answer;
  });

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

  function handleRestart() {
    setGameState("in play");
    setResults([]);
    const answer = sample(WORDS);
    setAnswer(answer);
    console.log({ answer });
  }

  return (
    <>
      <ResultsList results={results} />
      <GuessInput gameState={gameState} addGuess={addGuess} />
      {gameState === "won" && (
        <WonBanner numGuesses={results.length} handleRestart={handleRestart} />
      )}
      {gameState === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
