'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('Guess a number please');
    }
    else if (secretNumber === guess) {
        displayMessage('Correct number');
        document.querySelector('.game-title').textContent = 'SECRET NUMBER IS';
        document.querySelector('.guessme').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;

        }
    }
    else if (secretNumber !== guess) {
        if (score > 1) {
            displayMessage(guess < secretNumber ? 'Too Low' : 'Too High')
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lose the game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('.game-title').textContent = 'SECRET NUMBER IS';
            document.querySelector('.guessme').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing number');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').textContent = '';
    document.querySelector('.game-title').textContent = 'GUESS THE NUMBER';
    document.querySelector('.guessme').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'lightsteelblue';
});