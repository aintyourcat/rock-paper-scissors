const OPTIONS = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    switch(playerSelection.toUpperCase()) {
	case OPTIONS[0].toUpperCase():
	    switch(computerSelection.toUpperCase()) {
    	        case OPTIONS[0].toUpperCase():
		    return 'Draw!';
    	            break;
    	        case OPTIONS[1].toUpperCase():
		    return `You lose!, ${computerSelection} beats ${playerSelection}`;
    	            break;
    	        case OPTIONS[2].toUpperCase():
		    return `You win!, ${playerSelection} beats ${computerSelection}`;
    	            break;
    	    }
	    break;
	case OPTIONS[1].toUpperCase():
	    switch(computerSelection.toUpperCase()) {
    	        case OPTIONS[0].toUpperCase():
		    return `You win!, ${playerSelection} beats ${computerSelection}`;
    	            break;
    	        case OPTIONS[1].toUpperCase():
		    return 'Draw!';
    	            break;
    	        case OPTIONS[2].toUpperCase():
		    return `You lose!, ${computerSelection} beats ${playerSelection}`;
    	            break;
    	    }
	    break;
	case OPTIONS[2].toUpperCase():
	    switch(computerSelection.toUpperCase()) {
    	        case OPTIONS[0].toUpperCase():
		    return `You lose!, ${computerSelection} beats ${playerSelection}`;
    	            break;
    	        case OPTIONS[1].toUpperCase():
		    return `You win!, ${playerSelection} beats ${computerSelection}`;
    	            break;
    	        case OPTIONS[2].toUpperCase():
		    return 'Draw!';
    	            break;
    	    }
	    break;
	default:
	    return 'Invalid input!';
    }
}

function game() {
    for(i=0; i<5; i++) {
	let playerSelection = prompt('Your selection?', '');
	
	if(!(playerSelection === null || playerSelection === '')) {
	    console.log(playRound(playerSelection, computerPlay()));
	}
    }
}

game();
