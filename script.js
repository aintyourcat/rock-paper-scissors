function computerPlay() {
    const ITEMS = ['Rock', 'Paper', 'Scissors'];
    pickedItem = ITEMS[Math.floor(Math.random() * 3)];
    return pickedItem;
}

function formatPlayerSelection(playerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() +
	playerSelection.slice(1).toLowerCase();

    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatPlayerSelection(playerSelection);
    let won;

    switch (playerSelection) {
	case 'Rock':
	    switch (computerSelection) {
		case 'Paper':
		    won = false;
		    break
		case 'Scissors':
		    won = true;
		    break;
	    }
	    break;
	case 'Paper':
	    switch (computerSelection) {
		case 'Rock':
		    won = true;
		    break
		case 'Scissors':
		    won = false;
		    break;
	    }
	    break;
	case 'Scissors':
	    switch (computerSelection) {
		case 'Rock':
		    won = false;
		    break
		case 'Paper':
		    won = true;
		    break;
	    }
	    break;
	default:
	    return 'Input invalid!';
    }

    if (won === undefined) {
	return 'Draw!';
    } else if(won === true) {
	return `You win!, ${playerSelection} beats ${computerSelection}`;
    } else {
	return `You lose!, ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerSelection;
    let gameCount = 1;

    while (gameCount <= 5) {
	playerSelection = prompt('Your item?', '');

	if (!(playerSelection === null || playerSelection === '')) {
	    console.log(playRound(playerSelection, computerPlay()));
	}

	gameCount += 1;
    }
}

game();
