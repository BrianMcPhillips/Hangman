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

// Update wrong letters
function updateWrongLettersEl() {
  wrongLettersElement.innerHTML =`
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if(index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  if(wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost.';
    popUp.style.display = 'flex';
  }
}

// Show notification 
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Available letter display
window.addEventListener('keydown', e => {
  if(e.KeyboardEvent.key >= 65 && e.KeyboardEvent.key <= 90) {
    const letter = e.key;

    if(selectedWord.includes(letter)) {
      if(!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if(!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();