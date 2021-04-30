// declare globals
let round = 0;
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    // randomly returns "Rock", "Paper", or "Scissors"
    let rng = Math.floor(Math.random() * 3)
    if (rng < 1){
        selectAnimate("ROCK");
        return "ROCK";}
    else if (rng < 2){
        selectAnimate("PAPER");
        return "PAPER";
    }
    else{
        selectAnimate("SCISSORS");
        return "SCISSORS";
    }
}

function selectAnimate(move) {
    document.getElementById(move).classList.add("computerSelection");
    setTimeout(() => { document.getElementById(move).classList.remove("computerSelection")}, 400);
    setTimeout(() => { document.getElementById(move).classList.add("computerSelection")}, 500);
    setTimeout(() => { document.getElementById(move).classList.remove("computerSelection")}, 800);
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

function game(playerInput){
//    for (i = 0; i < 5; i++) {
        appendLog(playRound(playerInput, computerPlay()))
        round++;
    
}

/* retool this code block for GUI input
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

function appendLog(string){
    document.getElementById('roundLog').textContent = string;
}

function getKey(e){
    console.log(e);
}

const moves = Array.from(document.querySelectorAll('.move'));
moves.forEach(move => move.addEventListener('click', function(){game(move.id)}));
moves.forEach(move => move.addEventListener('keydown', getKey));