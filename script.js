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

/****  new part starts here    */
let para = document.createElement('p');
para.style.color = 'white';


let div = document.createElement('div');
div.classList.add('container');
div.style.height = 'auto';
div.style.width = 'auto';
div.style.backgroundColor = '#002200';
div.append(para);

let btnR = document.createElement('button');
btnR.innerText = 'Rock';
btnR.addEventListener('click', () => {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
    let cpuWins = document.createTextNode(`CPU WINS! `);
    let playerWins = document.createTextNode(`PLAYER WINS! `);
    let draw = document.createTextNode(` THAT WAS A DRAW! `);
    

    if(computerAnswer === 'rock') {
        gamesDraw++;
        para.appendChild(draw);
    } else if(computerAnswer === 'paper') {
        cpuScore++;
        para.appendChild(cpuWins);
    } else if(computerAnswer === 'scissors') {
        playerScore++;
        para.appendChild(playerWins);
    }
    return para.appendChild(document.createTextNode(`CPU ${cpuScore} - PLAYER ${playerScore}`));
});

let btnP = document.createElement('button');
btnP.innerText = 'Paper';
btnP.addEventListener('click', () => {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
    let cpuWins = document.createTextNode(` CPU WINS! `);
    let playerWins = document.createTextNode(` PLAYER WINS! `);
    let draw = document.createTextNode(` THAT WAS A DRAW! `);

    if(computerAnswer === 'rock') {
        playerScore++;
        para.appendChild(playerWins);
    } else if(computerAnswer === 'paper') {
        gamesDraw++;
        para.appendChild(draw);
    } else if(computerAnswer === 'scissors') {
        cpuScore++;
        para.appendChild(cpuWins);
    }
    return para.appendChild(document.createTextNode(`CPU ${cpuScore} - PLAYER ${playerScore}`));
});

let btnS = document.createElement('button');
btnS.innerText = 'Scissors';
btnS.addEventListener('click', () => {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
    let cpuWins = document.createTextNode(` CPU WINS! `);
    let playerWins = document.createTextNode(` PLAYER WINS! `);
    let draw = document.createTextNode(` THAT WAS A DRAW! `);

    if(computerAnswer === 'rock') {
        cpuScore++;
        para.appendChild(cpuWins);
    } else if(computerAnswer === 'paper') {
        playerScore++;
        para.appendChild(playerWins);
    } else if(computerAnswer === 'scissors') {
        draw++;
        para.appendChild(draw);
    }
    return para.appendChild(document.createTextNode(` CPU ${cpuScore} - PLAYER ${playerScore} `));
});

let body = document.getElementsByTagName('body')[0];
body.appendChild(btnR);
body.appendChild(btnP);
body.appendChild(btnS);
body.appendChild(div);









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