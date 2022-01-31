const options = ["rock", "paper", "scissors"];
let userWins = 0;
let computerWins = 0;


const btn = document.querySelector('#btn');
btn.addEventListener('click', )


/* function playRound(){

    function computerChoice (){
        return options[Math.floor(Math.random()*options.length)];
    }
    let computerWeapon = computerChoice();

    console.log(computerWeapon);
    //have ensured above that computer choice randomly generates one of the three string
    //must next create a user input to have a second value to compare

    userWeapon = prompt("Rock, Paper, or Scissors?", "Enter weapon choice NOW!").toLowerCase()
    //user input created and stored.  Must now use the two comparatively in a round mode
    //create function for play round and determine the outcome


        if (userWeapon === "rock" && computerWeapon === "scissors" ||
        userWeapon === "paper" && computerWeapon === "rock" ||
        userWeapon === "scissors" && computerWeapon === "paper") {
            alert("Congrats you win this round!");
            userWins++;
        }else if (
        userWeapon === "rock" && computerWeapon === "paper" ||
        userWeapon === "paper" && computerWeapon === "scissors" ||
        userWeapon === "scissors" && computerWeapon === "rock") {
            alert("Sorry, you didn't win this round!");
            computerWins++;
        }else if (userWeapon == computerWeapon){
            alert("Tie! Play the round again!");
            playRound();
        } else {
            alert("Sorry an unexpected error has occurred!");
            playRound();
        };

}
 *///playRound();
//ensured that the two can compare effectively under all circumstances. now to loop or create a function to run five times and add a counter and then determine winner
//

/* function gamePlay () {
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

gamePlay();
 */