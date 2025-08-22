import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('running'); // 'running', 'won', or 'lost'

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    // Check if the user won
    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      // Check if the user lost (used all guesses without winning)
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        onSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <GameOverBanner
        gameStatus={gameStatus}
        numOfGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
