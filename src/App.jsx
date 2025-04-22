import React, { useState, useEffect } from 'react';

const GuessingGame = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [userInput, setUserInput] = useState();
  const [message, setMessage] = useState();
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
    setUserInput('');
    setMessage('');
    setAttempts(0);
    setGameOver(false);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const checkGuess = () => {
    const guess = parseInt(userInput);
    


    setUserInput('');
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Угадай число от 1 до 100</h1>
      <input 
        type="number" 
        value={userInput} 
        onChange={handleInputChange} 
        disabled={gameOver}
        placeholder="Введите ваше число"
      />
     
      

      {message && <h2>{message}</h2>}
      
      <h3>Количество попыток: {attempts}</h3>
      

      {gameOver && (
        <button onClick={resetGame}>Сыграть ещё раз</button>
      )}
    </div>
  );
};

export default GuessingGame;
