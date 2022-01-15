// I want to begin with a function "computerPlay" 
//will randomly return either Rock, Paper or Scissors
let choices = ["rock", "paper" , "scissors"];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
function computerPlay(){
    return computerChoice;
};
console.log(computerChoice);


//write a function that plays a single round of rock paper scissors
// ask user for input rock paper or scissors
//define rock > scissors; scissors > paper; paper > rock;
// check this against computerChoice 
//return outcome

let userAnswer = prompt("Rock, Paper, or Scissors?").toLowerCase();
console.log(userAnswer);
let computerAnswer = computerChoice;
console.log(computerAnswer);

//if userAnswer = computerAnswer

    function playRound (userAnswer, computerAnswer){
        let answer;
        if (userAnswer === "rock" && computerAnswer === "paper"){
            answer = ("paper beats rock, you lose!");
        }else if (userAnswer === "rock" && computerAnswer === "scissors"){
            answer =  ("rock beats scissors! you win!")
        }else if (userAnswer === "scissors" && computerAnswer === "paper"){
            answer = ("scissors beats paper! you win!")
        }else if (userAnswer === "scissors" && computerAnswer === "rock"){
            answer = ("rock beats scissors, you lose!")
        }else if (userAnswer === "paper" && computerAnswer === "scissors"){
            answer = ("scissors beats paper, you lose!")
        }else if (userAnswer === "paper" && computerAnswer === "rock"){
            answer = ("paper beats rock! you win!")
        }else if (userAnswer === computerAnswer){
            answer = ("Tie! play again");
        }else{
            answer = ("Unknown error has occured!");
        };
        alert(answer);
        return(answer);
       
    };

    console.log(playRound(userAnswer, computerAnswer))




