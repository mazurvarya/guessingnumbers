import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// if (isNaN(guess)) {
//   setMessage('Пожалуйста, введите число.');
//   return;
// }


// 31
// setAttempts(attempts + 1);

// if (guess < randomNumber) {
//   setMessage('Больше');

// } else if (guess > randomNumber) {
//   setMessage('Меньше');

// } else {
//   setMessage('Угадал!');
//   setGameOver(true);
// }

// 46
// <button onClick={checkGuess} disabled={gameOver}>Проверить</button>