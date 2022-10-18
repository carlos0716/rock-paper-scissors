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
    // let cpuWins = document.getElementsByTagName('p'); //` CPU WINS! `
    // //cpuWins.innerText = ' CPU WINS! ';
    // let playerWins = document.getElementsByTagName('p'); //` PLAYER WINS! `
    // //playerWins.innerText = ' PLAYER WINS!';
    // let draw = document.getElementsByTagName('p');//` THAT WAS A DRAW! `
    // //draw.innerText = 'THAT WAS A DRAW!';  

    if (playerSelection === computerSelection) {
        gamesDraw++;
        para.innerText = `THAT WAS A DRAW! CURRENT SCORE CPU ${cpuScore} - PLAYER ${playerScore}`;  
    }
    
    else if(playerSelection === "rock" && computerSelection === "paper") {
        cpuScore++;
        para.innerText =  ` CPU'S GAME CURRENT SCORE CPU ${cpuScore} - PLAYER ${playerScore} `;
    }
    
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        cpuScore++;
        para.innerText = ` CPU'S GAME CURRENT SCORE CPU ${cpuScore} - PLAYER ${playerScore} `;
    }
    
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        cpuScore++;
        para.innerText = ` CPU'S GAME CURRENT SCORE CPU ${cpuScore} - PLAYER ${playerScore} `;
    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        para.innerText = ` PLAYER'S GAME CURRENT SCORE CPU ${cpuScore} - PLAYER ${playerScore} `;
    }
    
    else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        para.innerText = ` PLAYER'S GAME CURRENT SCORE CPU ${cpuScore} - PLAYER ${playerScore} `;
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        para.innerText = ` PLAYER'S GAME CURRENT SCORE CPU ${cpuScore} - PLAYER ${playerScore} `;
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
 div.style.height = '50px';
 div.style.width = '500px';
div.style.backgroundColor = '#002200';

div.append(para);

let btnR = document.createElement('button');
btnR.innerText = 'Rock';
btnR.addEventListener('click', () => {
    let computerAnswer = getComputerChoice();
    getComputerChoice();
    
    let playerSelection = 'rock';
    playRound(playerSelection, computerAnswer);
    
    if (playerScore === 5) {
        para.innerText = `PLAYER IS THE WINNER!! FINAL SCORE CPU ${cpuScore} - PLAYER ${playerScore}  GAME OVER`;
        playerScore = playerScore - playerScore;
        cpuScore = cpuScore -cpuScore;
    }   else if( cpuScore === 5) {
        para.innerText = ` CPU IS THE WINNER!! FINAL SCORE CPU ${cpuScore} - PLAYER ${playerScore}  GAME OVER`;
        playerScore = playerScore - playerScore;
        cpuScore = cpuScore -cpuScore;
    }

    //return para.innerText =` CPU ${cpuScore} - PLAYER ${playerScore} `;
});

let btnP = document.createElement('button');
btnP.innerText = 'Paper';
btnP.addEventListener('click', () => {
    let computerAnswer = getComputerChoice();// Why do I created the variable instead of calling the function directly? because it created an error 
    getComputerChoice();
    
    let playerSelection = 'paper';
    playRound(playerSelection, computerAnswer);

    if (playerScore === 5) {
        para.innerText = ` PLAYER IS THE WINNER!! FINAL SCORE CPU ${cpuScore} - PLAYER ${playerScore}  GAME OVER`;
        playerScore = playerScore - playerScore;
        cpuScore = cpuScore -cpuScore;
    } else if( cpuScore === 5) {
            para.innerText = ` CPU IS THE WINNER!! FINAL SCORE CPU ${cpuScore} - PLAYER ${playerScore}  GAME OVER`;
            playerScore = playerScore - playerScore;
            cpuScore = cpuScore -cpuScore;
        }
    //return para.appendChild(document.createTextNode(` CPU ${cpuScore} - PLAYER ${playerScore} `));
});

let btnS = document.createElement('button');
btnS.innerText = 'Scissors';
btnS.addEventListener('click', () => {
    let computerAnswer = getComputerChoice();
    getComputerChoice();
    
    let playerSelection = 'scissors';
    playRound(playerSelection, computerAnswer);
    
    if (playerScore === 5) {
        para.innerText = ` PLAYER IS THE WINNER!! FINAL SCORE CPU ${cpuScore} - PLAYER ${playerScore}  GAME OVER`;
        playerScore = playerScore - playerScore;
        cpuScore = cpuScore -cpuScore;
    }
        else if( cpuScore === 5) {
            para.innerText = ` CPU IS THE WINNER!! FINAL SCORE CPU ${cpuScore} - PLAYER ${playerScore}  GAME OVER`;
            playerScore = playerScore - playerScore;
            cpuScore = cpuScore -cpuScore;
        }
    //return para.appendChild(document.createTextNode(` CPU ${cpuScore} - PLAYER ${playerScore} `));
});

let body = document.getElementsByTagName('body')[0];
body.appendChild(btnR);
body.appendChild(btnP);
body.appendChild(btnS);
body.appendChild(div);



// let cpuWins = document.createTextNode(` CPU WINS! `);
    // let playerWins = document.createTextNode(` PLAYER WINS! `);
    // let draw = document.createTextNode(` THAT WAS A DRAW! `);

    // else if( playerScore === 5) {
    //     para.innerText = ` GAME OVER - FINAL SCORE PLAYER ${playerScore} - CPU ${cpuScore} `
    // }    

    // else if(cpuScore === 5) {
    //     para.innerText = ` GAME OVER - FINAL SCORE PLAYER ${playerScore} - CPU ${cpuScore} `    
    // }
