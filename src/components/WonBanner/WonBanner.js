import React from "react";
import Banner from "../Banner";

function WonBanner({ numGuesses, handleRestart }) {
  return (
    <Banner status="happy" action={handleRestart} actionText="Restart game">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numGuesses > 1 ? `${numGuesses} guesses` : "1 guess"}</strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
