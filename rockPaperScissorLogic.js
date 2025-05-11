//Start by making all choices into a array const and scores

let HUMANSCORE = 0;
let CPUSCORE = 0;
const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const ROCK = document.getElementById('Rock');
const PAPER = document.getElementById('Paper');
const SCISSOR = document.getElementById('Scissors');
const SCORETEXT = document.getElementById('scoresText');
const RESULTTEXT = document.getElementById('resultText');

//Make the cpu logic

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//CPU Choice in the round
function getComputerChoice(){
    return(CHOICES[getRandomInt(3)])
}

//Human prompt to get human choice
function getHumanChoice(){
    let chosenDecision = "EMPTY"

    while(CHOICES.includes(chosenDecision) == false){
        chosenDecision = String(prompt('Please enter your decision Rock, Paper, or Scissor'));
        chosenDecision = chosenDecision.toUpperCase();
    }
    return chosenDecision;
}

//Logic for the results
function playRound (humanChoice, computerChoice) {
    if(humanChoice == "ROCK" && computerChoice == "SCISSORS"){
        HUMANSCORE += 1
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
        CPUSCORE += 1
        RESULTTEXT.innerText = 'You Picked Rock and CPU Picked Paper, CPU Wins Round';
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK"){
        HUMANSCORE += 1
        RESULTTEXT.innerText = 'You Picked Paper and CPU Picked ROCK, Human WinsRound';
    }
    else if(humanChoice == "PAPER" && computerChoice == "Scissors"){
        CPUSCORE += 1
        RESULTTEXT.innerText = 'You Picked Paper and CPU Picked Scissors, CPU Wins Round';
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        HUMANSCORE += 1
        RESULTTEXT.innerText = 'You Picked Scissors and CPU Picked Paper, Human Wins Round';
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        CPUSCORE += 1
        RESULTTEXT.innerText = 'You Picked Scissors and CPU Picked Rock, CPU Wins Round';
    }
    else{
        RESULTTEXT.innerText = 'Both player and cpu chose the same thing no score increase';
    }
    SCORETEXT.innerText = "Human Score :"+HUMANSCORE + " CPU Score : " + CPUSCORE;
    if(HUMANSCORE == 5){
        RESULTTEXT.innerText = 'Player scored to 5 first Player WINS Game'
        ROCK.remove();
        PAPER.remove();
        SCISSOR.remove();
    }
    if(CPUSCORE == 5){
        RESULTTEXT.innerText = 'Player scored to 5 first Player WINS Game';
        ROCK.remove();
        PAPER.remove();
        SCISSOR.remove();
    }
}

ROCK.addEventListener("click", () => playRound("ROCK",getComputerChoice()));
PAPER.addEventListener("click", () => playRound("PAPER",getComputerChoice()));
SCISSOR.addEventListener("click", () => playRound("SCISSORS",getComputerChoice()));
