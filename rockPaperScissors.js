function computerPlay() {
    let rng = Math.floor(Math.random() * 3)
    if (rng < 1)
        return "Rock";
    else if (rng < 2)
        return "Paper";
    else
        return "Scissors";
}

for (i = 0; i < 10; i++) {
    console.log(computerPlay())
}
