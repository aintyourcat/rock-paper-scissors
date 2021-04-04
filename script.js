function computerPlay() {
    const ITEMS = ['Rock', 'Paper', 'Scissors'];
    pickedItem = ITEMS[Math.floor(Math.random() * 3)];
    return pickedItem;
}

function playRound(playerSelection, computerSelection) {
    let playerWin = null;

    switch (playerSelection) {
	case 'Rock':
	    switch (computerSelection) {
		case 'Paper':
		    playerWin = false;
		    break
		case 'Scissors':
		    playerWin = true;
		    break;
	    }
	    break;
	case 'Paper':
	    switch (computerSelection) {
		case 'Rock':
		    playerWin = true;
		    break
		case 'Scissors':
		    playerWin = false;
		    break;
	    }
	    break;
	case 'Scissors':
	    switch (computerSelection) {
		case 'Rock':
		    playerWin = false;
		    break
		case 'Paper':
		    playerWin = true;
		    break;
	    }
	    break;
    }
    
    return playerWin;
}

function updatePlayerScore(playerScore) {
    document.querySelector('#player-score').innerText = playerScore;
}

function updateComputerScore(computerScore) {
    document.querySelector('#computer-score').innerText = computerScore;
}

function updateGameResult(gameResult) {
    document.querySelector('#game-result').innerText = gameResult;
}

function disableItemButtons() {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
	if (!item.hasAttribute('disabled')) {
	    item.setAttribute('disabled', '');
	}
    });
}

function enableItemButtons() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
	if (item.hasAttribute('disabled')) {
	    item.removeAttribute('disabled');
	}
    });
}

function game() {
    const items = document.querySelectorAll('.item');

    let playerScore = 0;
    let computerScore = 0;
    
    items.forEach(item => {
        item.addEventListener('click', event => {
	    const playerSelection = item.dataset.name;
	    const computerSelection = computerPlay();
	    const playerWin = playRound(playerSelection, computerSelection);

	    if (playerWin === true) {
		updatePlayerScore(playerScore += 1);
		updateGameResult(`Yippie! ${playerSelection} beat${(playerSelection === 'Scissors') ? '' : 's'} ${computerSelection}`);
	    } else if(playerWin === false) {
		updateComputerScore(computerScore += 1); 
		updateGameResult(`Oh no! ${computerSelection} beat${(computerSelection === 'Scissors') ? '' : 's'} ${playerSelection}`);
	    } else {
		updateGameResult(`Draw! ${playerSelection} meet${(playerSelection === 'Scissors') ? '' : 's'} ${computerSelection}`);
	    }

	    if (playerScore === 5 || computerScore === 5) {
		gameResult = (playerScore === 5) ? 'You win!' : 'You lose!';
		updateGameResult(gameResult);
		disableItemButtons();
	    }
        });
    });

    const restartButton = document.querySelector('#restart');

    restartButton.addEventListener('click', event => {
	updatePlayerScore(playerScore = 0);
	updateComputerScore(computerScore = 0);
	updateGameResult('Choose your item');
	enableItemButtons();
    });
}

game();
