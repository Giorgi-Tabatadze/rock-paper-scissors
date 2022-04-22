//Rock Paper Scissors game - 
//We are going to be writing a program that is going to generate a random return
//of rock, paper or scissors. We will need to take a user input and compare it
//to the randomly generated rock, paper, scissors and determine who is the winner. 
//We need to play a 5 round game and determine the final winner of the round and
//start the game over once the final winner of these rounds is determined. 
//We need to add messages to the user throught the whole process so that user is
//aware of who is the winner, what is the score and what has been thrown at them.

//start by developing a program that plays one round and determines the winner. 

//create function named generateRandom
function generateRandom(min, max) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor( rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

/*function that generates random computer selection using numbers, converted
into string and returns it*/
function computerPlay() {
  let n = generateRandom(1, 4);
  if (n === 1) { 
    return "ROCK";
  } else if (n === 2) { 
    return "PAPER";
  } else 
    return "SCISSORS";
}

/* Play a round using user input and increment winner score to track who wins. 
if one of the users gets 5 they win and game start over.*/
function playRound(playerSelection) {
  playerSelection = playerSelection.target.id;
  let computerSelection = computerPlay();
  if (computerSelection === playerSelection) 
  {
    message = ("its a tie!")
  }
  else if (computerSelection === "ROCK" 
            && playerSelection === "SCISSORS") 
  {
    message = ("You Lose! Rock beats Scissors")
    computerScore++;
  }
  else if (computerSelection === "PAPER" 
            && playerSelection === "ROCK")
  {
    message = ("You Lose! Paper beats Rock")
    computerScore++;
  }

  else if (computerSelection === "SCISSORS"
          && playerSelection === "PAPER")
  {
    message = ("You Lose! Scissors beat paper")
    computerScore++;
  }
  else if (computerSelection === "ROCK"
          && playerSelection === "PAPER")
  {
    message = ("You Win! Paper beats Rock")
    playerScore++;
  }
  else if (computerSelection === "PAPER"
          && playerSelection === "SCISSORS")
  {
    message = ("You Win! Scissors beat Rock");
    playerScore++;
  }
  else if (computerSelection === "SCISSORS"
          && playerSelection === "ROCK")
  {
    message = ("You Win! Rock beats Scisssors");
    playerScore++;
  }
  else 
  {
    message = ("Incorrect input! Please try again");
  }
     score = (`Your score is: ${playerScore} and Computer score is: ${computerScore}`)
  if (computerScore === 5) 
  {
    message = ("Loser! You have lost the game!, press any key to start again")
    computerScore = 0;
    playerScore = 0;
  }
  if (playerScore === 5)
  {
    message = "Congratulations! You have won the game! press any key to start again"
    computerScore = 0;
    playerScore = 0;
  }
  mainScreen.innerText = `${score}
                          ${message}`
}


let computerScore = 0;
let playerScore = 0;

const mainScreen = document.querySelector("#message")
const buttons = Array.from(document.querySelectorAll("button"));
console.log(buttons)
buttons.forEach(button => {button.addEventListener("click", playRound)});



/*function that plays rounds until one of the users gets 5 wins*/


/*add event listeners to all the buttons in div. 
function that plays 1 round using playround function where I pass selection. 
track score. 
if one reached 5 restart game. 
*/

