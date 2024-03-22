import React from "react";

function HappyBanner({ numGuesses }) {
  return (
    <>
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numGuesses} guesses</strong>.
        </p>
      </div>
    </>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ gameState, answer, numGuesses }) {
  if (gameState === "won") {
    return <HappyBanner numGuesses={numGuesses} />;
  }
  if (gameState === "lost") {
    return <SadBanner answer={answer} />;
  }
  return <></>;
}

export default Banner;
