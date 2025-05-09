//Start by making all choices into a array const and scores

let HUMANSCORE = 0;
let CPUSCORE = 0;
const CHOICES = ["ROCK", "PAPER", "SCISSORS"]

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
function playRound(humanChoice, computerChoice) {
    console.log("Human Chose: " + humanChoice);
    console.log("CPU Chose: " + computerChoice);
    if(humanChoice == "ROCK" && computerChoice == "SCISSORS"){
        HUMANSCORE += 1
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
        CPUSCORE += 1
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK"){
        HUMANSCORE += 1
    }
    else if(humanChoice == "PAPER" && computerChoice == "SCISSORS"){
        CPUSCORE += 1
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        HUMANSCORE += 1
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        CPUSCORE += 1
    }
    else{
        console.log("Both player and cpu chose the same decision no score increase");
    }
    console.log("Human Score: " + HUMANSCORE + " CPU Score: " + CPUSCORE);
}

//Game Logic for 5 rounds
function playGame(rounds){
    console.log(rounds +" Rounds of Rock, Paper, Scissors start now. . .");
    for(let i = 0 ; i <rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score = Human score: " + HUMANSCORE + " CPU score: " + CPUSCORE);

    if(HUMANSCORE > CPUSCORE){
        console.log("Human Won Congratulation!")
    }
    else if(HUMANSCORE < CPUSCORE){
        console.log("CPU Won Sorry!")
    }
    else{
        console.log("TIED that is surprising");
    }
}

//Start game
playGame(5)