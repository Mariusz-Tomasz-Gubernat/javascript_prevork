var computerMove, playerMove;
playerMove = 'papier'

randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

if (randomNumber == 1) {
    computerMove = 'papier';
} else if (randomNumber == 2) {
    computerMove = 'kamień';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
} else {
    computerMove = 'nieznany ruch';
};

printMessage(computerMove)