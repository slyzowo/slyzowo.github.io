// the things that are needed in order to play rps (Rock, Paper, Scissors)
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");

// the choices (rock, paper and again scissors)
const choiceButtons = document.querySelectorAll(".choiceButton");

let player;
let computer;

choiceButtons.forEach(button => button.addEventListener("click", ()=> {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
}));

function computerTurn(){
// chooses a random answer from 1 - 3 and chooses based off of switch cases
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1: 
        computer = "ROCK";
        break;

        case 2: 
        computer = "PAPER";
        break;

        case 3: 
        computer = "SCISSORS";
        break;
    };
};
