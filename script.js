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
        alert(`Player wins ${playerScore} - ${cpuScore}`);
    }
    else if (cpuScore === 5) {
        alert(`Cpu wins ${cpuScore} - ${playerScore}`);
    }
}


function playRound(playerSelection, computerSelection) {
    let cpuWins = document.createTextNode(` CPU WINS! `);
    let playerWins = document.createTextNode(` PLAYER WINS! `);
    let draw = document.createTextNode(` THAT WAS A DRAW! `);


    if (playerSelection === computerSelection) {
        gamesDraw++;
        para.appendChild(draw);
    }
    
    else if(playerSelection === "rock" && computerSelection === "paper") {
        cpuScore++;
        para.appendChild(cpuWins);
    }
    
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        cpuScore++;
        para.appendChild(cpuWins);
    }
    
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        cpuScore++;
        para.appendChild(cpuWins);
    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        para.appendChild(playerWins);
    }
    
    else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        para.appendChild(playerWins);
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        para.appendChild(playerWins);
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
// div.style.height = 'auto';
// div.style.width = 'auto';
div.style.backgroundColor = '#002200';

div.append(para);

let btnR = document.createElement('button');
btnR.innerText = 'Rock';
btnR.addEventListener('click', () => {
    let computerAnswer = getComputerChoice();
    getComputerChoice();
    
    let playerSelection = 'rock';
    playRound(playerSelection, computerAnswer);
    
    return para.appendChild(document.createTextNode(` CPU ${cpuScore} - PLAYER ${playerScore} `));
});

let btnP = document.createElement('button');
btnP.innerText = 'Paper';
btnP.addEventListener('click', () => {
    let computerAnswer = getComputerChoice();// Why do I created the variable instead of calling the function directly? because it created an error 
    getComputerChoice();
    
    let playerSelection = 'paper';
    playRound(playerSelection, computerAnswer);

    return para.appendChild(document.createTextNode(` CPU ${cpuScore} - PLAYER ${playerScore} `));
});

let btnS = document.createElement('button');
btnS.innerText = 'Scissors';
btnS.addEventListener('click', () => {
    let computerAnswer = getComputerChoice();
    getComputerChoice();
    
    let playerSelection = 'scissors';
    playRound(playerSelection, computerAnswer);
    
    return para.appendChild(document.createTextNode(` CPU ${cpuScore} - PLAYER ${playerScore} `));
});

let body = document.getElementsByTagName('body')[0];
body.appendChild(btnR);
body.appendChild(btnP);
body.appendChild(btnS);
body.appendChild(div);



// let cpuWins = document.createTextNode(` CPU WINS! `);
    // let playerWins = document.createTextNode(` PLAYER WINS! `);
    // let draw = document.createTextNode(` THAT WAS A DRAW! `);