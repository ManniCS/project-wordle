import React from "react";

import { MAX_WORD_LENGTH } from "../../constants.js";

function GuessInput({ gameState, addGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleGuess(event) {
    event.preventDefault();
    addGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        disabled={gameState === "won" || gameState === "lost"}
        required
        value={guess}
        maxLength={MAX_WORD_LENGTH}
        title={`${MAX_WORD_LENGTH} letter word`}
        pattern="[A-Z]{5}"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
