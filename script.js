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
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return alert(`You win ${playerSelection} beats ${computerSelection}`);
    }
    
    if(playerSelection === "paper" && computerSelection === "rock") {
        return alert(`You win ${playerSelection} beats ${computerSelection}`);
    }
    
    if(playerSelection === "scissors" && computerSelection === "paper") {
        return alert(`You win ${playerSelection} beats ${computerSelection}`);
    }
    
    else {
        alert("Try again");
    }
}   

function computerPlay() { // I had this code block at the beginning of the file, once I move it after the main function the program worked as expected.
    let computerChoice = ['rock', 'paper', 'scissors']
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return computerAnswer;
}

const playerSelection = prompt("Enter choice:");
const playerSelectionInsensitive = playerSelection.toLowerCase();
const computerSelection = computerPlay()
playRound(playerSelectionInsensitive, computerSelection);



