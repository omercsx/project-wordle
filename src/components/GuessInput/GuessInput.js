import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess.toUpperCase()} onChange={(e) => setGuess(e.target.value)} pattern='[A-Z]{5}' minLength={5} maxLength={5} />
  </form>;
}

export default GuessInput;
