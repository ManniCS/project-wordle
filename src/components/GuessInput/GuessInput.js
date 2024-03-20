import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleGuess(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        value={guess}
        maxLength={5}
        title={`5 letter word`}
        pattern="[A-Z]{5}"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
