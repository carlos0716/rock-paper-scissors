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

// if (playerScore > cpuScore) {
//     return alert(`Player wins with a score of ${playerScore} - ${cpuScore}`);
//  }
//  else if (cpuScore > playerScore) {
//     return alert(`Computer wins with a score of ${cpuScore} - ${playerScore} `);
//  }
//  else {
//     return alert(`Final Score: Player - ${playerScore} Computer - ${cpuScore} Draws - ${gamesDraw}`);
//  }


//** */ function game() {

//      for (let i = 0; i = 5; i++) {   
//         let playerSelection = prompt('Enter selection');
//         let playerSelectionInsensitive = playerSelection.toLowerCase();
//     playRound(playerSelectionInsensitive, getComputerChoice());
//      }
     
// }


// let playerScore = 0;
// let cpuScore = 0;
// let gamesDraw = 0;

// let playerSelection = prompt('Enter selection');
// let playerSelectionInsensitive = playerSelection.toLowerCase();*****


//************* This is the right solution to the RPS exercise */
'use strict'
let playerScore = 0;
let cpuScore = 0;
let gamesDraw = 0;

function game() {
while (playerScore < 5 && cpuScore < 5) {
    let playerSelection = prompt('Enter selection');
    let playerSelectionInsensitive = playerSelection.toLowerCase(); 
    playRound(playerSelectionInsensitive, getComputerChoice());
}
    if (playerScore === 5) {
        return alert(`Player wins ${playerScore} - ${cpuScore}`)
    }
    else if (cpuScore === 5) {
        return alert(`Cpu wins ${cpuScore} - ${playerScore}`)
    }
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return console.log(gamesDraw+=1);
    }
    
    else if(playerSelection === "rock" && computerSelection === "paper") {
        return console.log(cpuScore+=1);
    }
    
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return console.log(cpuScore+=1);
    }
    
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return console.log(cpuScore+=1);
    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return console.log(playerScore+=1);
    }
    
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return console.log(playerScore+=1);
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return console.log(playerScore+=1);
    }
    
    else {
        alert("Try again");
    } 
}   

function getComputerChoice() { // I had this code block at the beginning of the file, once I move it after the main function the program worked as expected.
    let computerChoice = ['rock', 'paper', 'scissors'];
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return computerAnswer;
}

let btnR = document.createElement('button');
btnR.innerText = 'Rock';


let btnP = document.createElement('button');
btnP.innerText = 'Paper';

let btnS = document.createElement('button');
btnS.innerText = 'Scissors';

let body = document.getElementsByTagName('body')[0];
body.appendChild(btnR);
body.appendChild(btnP);
body.appendChild(btnS);

btnR.addEventListener('click', () => {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
    if(computerAnswer === 'rock') {
        gamesDraw++;
    } else if(computerAnswer === 'paper') {
        cpuScore++;
    } else if(computerAnswer === 'scissors') {
        playerScore++;
    }
    return console.log(computerAnswer);
});

btnP.addEventListener('click', () => {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
    if(computerAnswer === 'rock') {
        playerScore++;
    } else if(computerAnswer === 'paper') {
        gamesDraw++;
    } else if(computerAnswer === 'scissors') {
        cpuScore++;
    }
    return console.log(playerScore);
});

btnS.addEventListener('click', () => {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
    if(computerAnswer === 'rock') {
        cpuScore++;
    } else if(computerAnswer === 'paper') {
        playerScore++;
    } else if(computerAnswer === 'scissors') {
        cpuScore++;
    }
    return console.log(cpuScore);
});



// const playerSelection = prompt("Enter choice:");
// const playerSelectionInsensitive = playerSelection.toLowerCase();
// const computerSelection = getComputerChoice();  
// playRound(playerSelectionInsensitive, computerSelection);


// function getComputerChoice() {    
//     let computerChoice = ['rock', 'paper', 'scissors'];
//     let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];  
//     return computerAnswer;
// }

// let example = Math.floor(Math.random()*10+1);
// console.log(example);

// let exampleTwo = Math.floor(Math.random()  * 3 + 1);
// console.log(exampleTwo);

// function playRound(playerSelection, computerSelection) {
    
//     if(playerSelection === "rock" && computerSelection === "paper") {
//         return alert(`You lose ${computerSelection} beats ${playerSelection}`);
//     }
    
//     if(playerSelection === "paper" && computerSelection === "scissors") {
//         return alert(`You lose ${computerSelection} beats ${playerSelection}`);
//     }
    
//     if(playerSelection === "scissors" && computerSelection === "rock") {
//         return alert(`You lose ${computerSelection} beats ${playerSelection}`);
//     }
    
//     if (playerSelection === "rock" && computerSelection === "scissors") {
//         return alert(`You win ${playerSelection} beats ${computerSelection}`);
//     }
    
//     if(playerSelection === "paper" && computerSelection === "rock") {
//         return alert(`You win ${playerSelection} beats ${computerSelection}`);
//     }
    
//     if(playerSelection === "scissors" && computerSelection === "paper") {
//         return alert(`You win ${playerSelection} beats ${computerSelection}`);
//     }
    
//     else {
//         alert("Try again");
//     }
// }   

// function game() {

//     for (let i = 0; i = 5; i++) {   
//        let playerSelection = prompt('Enter selection');
//        let playerSelectionInsensitive = playerSelection.toLowerCase();
//    playRound(playerSelectionInsensitive, getComputerChoice());
//     }

//     if (playerScore > cpuScore) { ***** right anser for the best of five series. *******
//        return alert(`Player wins with a score of ${playerScore} - ${cpuScore}`);
//     }
//     else if (cpuScore > playerScore) {
//        return alert(`Computer wins with a score of ${cpuScore} - ${playerScore} `);
//     }
//     else {
//        return alert(`Final Score: Player - ${playerScore} Computer - ${cpuScore} Draws - ${gamesDraw}`);
//     }
    
// }*

// function getComputerChoice() { // I had this code block at the beginning of the file, once I move it after the main function the program worked as expected.
//     let computerChoice = ['rock', 'paper', 'scissors']
//     let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
//     return computerAnswer;
// }

// const playerSelection = prompt("Enter choice:");
// const playerSelectionInsensitive = playerSelection.toLowerCase();
// const computerSelection = getComputerChoice();  
// playRound(playerSelectionInsensitive, computerSelection);


// function getComputerChoice() {    
//     let computerChoice = ['rock', 'paper', 'scissors'];
//     let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];  
//     return computerAnswer;
// }

// let example = Math.floor(Math.random()*10+1);
// console.log(example);

// let exampleTwo = Math.floor(Math.random()  * 3 + 1);
// console.log(exampleTwo);