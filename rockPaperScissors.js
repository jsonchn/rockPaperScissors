// declare globals
let round = 0;
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    // randomly returns "Rock", "Paper", or "Scissors"
    let rng = Math.floor(Math.random() * 3)
    if (rng < 1)
        return "ROCK";
    else if (rng < 2)
        return "PAPER";
    else
        return "SCISSORS";
}

function playRound(playerSelection, computerSelection){
    // dictionary to store win conditions
    let winCon = {"ROCK": "SCISSORS", "SCISSORS": "PAPER", "PAPER": "ROCK"};

    // initialize roundResult
    let roundResult = "";
    
    // capitalize playerSelection argument
    let capPlayerSelection = playerSelection.toUpperCase();

    // tie condition
    if (capPlayerSelection == computerSelection) {
        roundResult = "It's a tie! " + capPlayerSelection + " ties with " + 
            computerSelection + "!";
    }

    // win condition
    else if (winCon[capPlayerSelection] == computerSelection) {
        roundResult = "You win! " + capPlayerSelection + " beats " + 
            computerSelection + "!";
        playerWins++;
    }

    // lose condition
    else {
        roundResult = "You lose! " + computerSelection + " beats " +
            capPlayerSelection + "!";
        computerWins++;
    }
    round++;
    return roundResult;
}

/* retool this code block for GUI input
function game(){
    let playerInput;
    for (i = 0; i < 5; i++) {
        playerInput = prompt("ROCK, PAPER, or SCISSORS?");
        console.log(playRound(playerInput, computerPlay()))
        round++;
    }
}

while (round < 5) {
    game();
}
if (round >= 5) {
    if (playerWins > computerWins) {
        console.log("Player wins with " + playerWins + " wins!");
    }
    else if (computerWins > playerWins) {
        console.log("Computer wins with " + computerWins + " wins!")
    }
    else {
        console.log("It's a tie! End score was " + playerWins + " - " + 
            playerWins);
    }
}
*/

const moves = Array.from(document.querySelectorAll('.move'));
moves.forEach(move => move.addEventListener('click', game(moveInput)))