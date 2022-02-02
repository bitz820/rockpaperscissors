const options = ["rock", "paper", "scissors"];
let userWins = 0;
let computerWins = 0;
/////////DOM ELEMENTS TO CREATE AND THEN CAN CALL AND REFERENCE
let resultsH4 = document.getElementById('results');
let userWinCount = document.getElementById('user-win-count');
let computerWinCount = document.getElementById('computer-win-count');
////////////
let displayResults;
let computerWeapon;
let userWeapon;


function assignUserWeapon(e) {
    userWeapon = e.target.id;
    // console.log(userWeapon);
    playRound()
};

//This chooses which choice the computer wants at random.
function assignComputerWeapon() {
    computerWeapon = options[Math.floor(Math.random() * options.length)];
}
//set a variable to always be assigned to this function

//set a function to compare userWeapon and computerWeapon
//BLUEPRINTS ON WHAT TO DO 
function playRound() {
    if (userWeapon === "rock" && computerWeapon === "scissors" ||
        userWeapon === "paper" && computerWeapon === "rock" ||
        userWeapon === "scissors" && computerWeapon === "paper") {
        resultsH4.innerText = "Congrats you win this round!";
        userWins++;
        userWinCount.innerText = "User Wins:" + userWins
        computerWinCount.innerText = "Computer Wins:" + computerWins;
    } else if (
        userWeapon === "rock" && computerWeapon === "paper" ||
        userWeapon === "paper" && computerWeapon === "scissors" ||
        userWeapon === "scissors" && computerWeapon === "rock") {
        resultsH4.innerText = "Sorry, you didn't win this round!";
        computerWins++;
        computerWinCount.innerText = "Computer Wins:" + computerWins;
        userWinCount.innerText = "User Wins:" + userWins;
    } else if (userWeapon == computerWeapon) {
        resultsH4.innerText = "Tie! Play the round again!";
    } else {
        resultsH4.innerText = "Sorry an unexpected error has occurred!";
        playRound();
    };
    assignComputerWeapon();
    console.log(computerWeapon)
};


//ensured that the two can compare effectively under all circumstances. now to loop or create a function to run five times and add a counter and then determine winner
function gamePlay() {
    playRound();
    console.log(userWins);
    console.log(computerWins);

    playRound();
    console.log(userWins);
    console.log(computerWins);

    playRound();
    console.log(userWins);
    console.log(computerWins);

    playRound();
    console.log(userWins);
    console.log(computerWins);

    playRound();
    console.log(userWins);
    console.log(computerWins);

    let winner = (userWins > computerWins) ? "Congratulations you win the game!" : "Sorry try your luck again to beat the computer!";
    alert(winner)
}




assignComputerWeapon();


//NEED TO LISTEN FOR WHAT THE USER CHOCIE IS!!! (can be any button within the container!!)
document.querySelector("#btn-container").addEventListener("click", assignUserWeapon);
console.log(computerWeapon);
// console.log(userWeapon);

console.log(resultsH4)

gamePlay();