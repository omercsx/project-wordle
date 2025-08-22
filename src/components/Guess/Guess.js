import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        const className = result ? `cell ${result[index].status}` : 'cell';
        return (
          <span key={index} className={className}>
            {result ? result[index].letter : ''}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
