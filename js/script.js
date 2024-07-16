const buttonRock = document.getElementById('button-rock'),
    buttonPaper = document.getElementById('button-paper'),
    buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {

    const playerMove = argButtonName,
        randomNumber = Math.floor(Math.random() * 3 + 1),
        computerMove = getMoveName(randomNumber);

    clearMessages();

    function getMoveName(argMoveId) {

        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    function displayResult(argPlayerMove, argComputerMove) {

        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz :(');
        }

        printMessage('Zagrałem ' + argComputerMove + ', a ty ' + argPlayerMove);
        console.log("Gracz", argPlayerMove);
        console.log("Komputer", argComputerMove);
    }


    displayResult(computerMove, playerMove);
}

buttonRock.addEventListener('click', function () {
    buttonClicked('kamień')
});

buttonPaper.addEventListener('click', function () {
    buttonClicked('papier')
});

buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce')
});