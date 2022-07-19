// let groceries = ['milk', 'coriander', 'cucumber', 'eggplant']
// let mygroceries = groceries[Math.floor(Math.random()* groceries.length)]
// console.log(mygroceries)

// let myArray = [
//     'Rock',
//     'Paper',
//     'Scissors'
// ];

// let randomItem = myArray[Math.floor(Math.random()* myArray.length)];
// console.log(randomItem);
let computerChoice = ['rock', 'paper', 'scissors']
function computerPlay() {
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return alert(computerAnswer);
}

// let computerSelection = computerPlay();
// let playerSelection = prompt("Do you want to play Rock, Paper or Scissors?");

function playRound(playerSelection, computerSelection) {
    
    
    if(playerSelection === "rock" && computerSelection === "paper") {
        return alert(`You lose ${computerSelection} beats ${playerSelection}`);
    }
    if(playerSelection === "paper" && computerSelection === "scissors") {
        return alert(`You lose ${computerSelection} beats ${playerSelection}`);
    }
    if(playerSelection === "scissors" && computerSelection === "rock") {
        return alert(`You lose ${computerSelection} beats ${playerSelection}`);
    }
    if(playerSelection === computerSelection) {
        return alert(`That was a tie!!`)
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return alert("try again")
    }
    
    else {
        return alert("Wrong data")
    }
}   

// const playerSelection = prompt("Do you want to play Rock, Paper or Scissors?");
// const computerSelection = computerPlay()
playRound("paper", "scissors");





