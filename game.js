// Get the input field and submit button
const inputField = document.getElementById('userNumber');
const submitBtn = document.getElementById('submitBtn');

// Add an event listener to the submit button
submitBtn.addEventListener('click', () => {
  // Get the user's number
  const userNumber = parseInt(inputField.value);

  // Check if the user's number is valid
  if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
    // Show an error message
    document.getElementById('result').innerHTML = 'Invalid number. Please enter a number between 1 and 100.';
    return;
  }

  // Generate a random number for the computer's guess
  let computerGuess;
  let guesses = 0;
  while (guesses < 5) {
    computerGuess = Math.floor(Math.random() * 100) + 1;
    guesses++;

    // Check if the computer's guess is correct
    if (computerGuess === userNumber) {
      document.getElementById('result').innerHTML = `Computer guessed ${computerGuess} and wins!`;
      return;
    }
  }

  // If the computer didn't guess the number within 5 attempts, the user wins
  document.getElementById('result').innerHTML = `The computer was unable to guess the number. You win!`;
});
