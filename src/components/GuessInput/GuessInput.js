import React, { useState } from 'react';

function GuessInput({ onSubmitGuess, gameStatus }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Don't submit if the game is over
    if (gameStatus !== 'running') {
      return;
    }

    console.log({ guess });
    onSubmitGuess(guess);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
