import React, { useState, useEffect } from 'react';

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess('');
    setMessage('');
    setAttempts(0);
    setGameOver(false);
  };

  const handleGuess = () => {
    const guess = parseInt(userGuess);
    
    if (isNaN(guess)) {
      setMessage('Введите число от 1 до 100.');
      return;
    }

    setAttempts(attempts + 1);

    if (guess < targetNumber) {
      setMessage('Больше');
    } else if (guess > targetNumber) {
      setMessage('Меньше');
    } else {
      setMessage('Угадал!');
      setGameOver(true);
    }
    
    
    setUserGuess('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Угадай число от 1 до 100</h1>
      <input
        type="number"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        disabled={gameOver}
        placeholder="Введите ваше число"
      />
      <button onClick={handleGuess} disabled={gameOver}>
        Проверить
      </button>
      
      <h2>{message}</h2>
      <h3>Количество попыток: {attempts}</h3>

      {gameOver && (
        <button onClick={resetGame}>
          Сыграть ещё раз
        </button>
      )}
    </div>
  );
};

export default NumberGuessingGame;