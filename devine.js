let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');

guessBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  attempts++;
  attemptsDisplay.textContent = `Tentatives : ${attempts}`;

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Veuillez entrer un nombre entre 1 et 100.";
    return;
  }

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Bravo ! Le nombre était ${secretNumber}.`;
    guessBtn.disabled = true;
  } else if (guess < secretNumber) {
    feedback.textContent = "C'est plus !";
  } else {
    feedback.textContent = "C'est moins !";
  }

  guessInput.value = '';
  guessInput.focus();
});

restartBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = `Tentatives : 0`;
  feedback.textContent = '';
  guessBtn.disabled = false;
  guessInput.value = '';
  guessInput.focus();
});