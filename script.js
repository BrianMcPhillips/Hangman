const wordElement = document.getElementById('word');
const wrongLettersElement = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popUp = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['progress', 'button', 'audio', 'interaction', 'purple', 'blue'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

console.log(selectedWord);

function displayWord() {
  wordElement.innerHTML = `
    ${selectedWord
      .split('')
      .map(letter => `
        <span class="letter">
          ${correctLetters.includes(letter) ? letter : ''}
        </span>`).join('')
    }
  `;

  const innerWord = wordElement.innerText.replace(/\n/g, '');
  console.log(wordElement.innerText, innerWord);
}

displayWord();