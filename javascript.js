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

//create function "computerPlay" with no parameters required
function computerPlay() {
//declare variable with name "n"
//n is equal to random number between 1 and 3. 
  let n = generateRandom(1, 4);
//if n is equal to 1 return a string - "rock"
  if (n === 1) { 
    return "ROCK";
//else if n is equal to 2 return a string - "paper"
  } else if (n === 2) { 
    return "PAPER";
//else return a string- "scissors"
  } else 
    return "SCISSORS";
}


//create function playRound - parameters(computerSelection, playerSelection)
function playRound() {
//computerSelection is equal to result of computerPlay function. 
  let computerSelection = computerPlay();
//playerSelection is equal to lower cased user input that is taken using a prompt.
  let playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
//if computerSelection is equal to playerSelection return a string - "its a tie!"
  if (computerSelection === playerSelection) 
  {
    return "its a tie!";
  }
//if computerSelection is rock and playerSelection is scissors return a string - 
//"You Lose! Rock beats Scissors"
  else if (computerSelection === "ROCK" 
            && playerSelection === "SCISSORS") 
  {
    return "You Lose! Rock beats Scissors";
  }
//if computerSelection is paper and playerSelection is rock return a string - 
//"You Lose! Paper beats Rock"
  else if (computerSelection === "PAPER" 
            && playerSelection === "ROCK")
  {
    return "You Lose! Paper beats Rock";
  }
//if computerSelection is scissors and playerSelection is paper return a string -
//"You Lose! Scissors beat paper"
  else if (computerSelection === "SCISSORS"
          && playerSelection === "PAPER")
  {
    return "You Lose! Scissors beat paper";
  }
//if computerSelection is rock and playerSelection is paper return a string -
//"You Win! Paper beats Rock"
  else if (computerSelection === "ROCK"
          && playerSelection === "PAPER")
  {
    return "You Win! Paper beats Rock";
  }
//if computerSelection is paper and playerSelection is scissors return a string -
//"You Win! Scissors beat Rock"
  else if (computerSelection === "PAPER"
          && playerSelection === "SCISSORS")
  {
    return "You Win! Scissors beat Rock";
  }
//if computerSelection is scissors and playerSelection is rock return a string- 
//"You Win! Rock beats Scisssors"
  else if (computerSelection === "SCISSORS"
          && playerSelection === "ROCK")
  {
    return "You Win! Rock beats Scisssors";
  }

//else return a string - "Incorrect input! Please try again"
  else 
  {
    return "Incorrect input! Please try again";
  }
}

//create function game with no parameters
function game() {
//declare variable computerScore and set it to 0 
  let computerScore = 0;
//declare variable playerScore and set it to 0 
  let playerScore = 0;
//declare variable message and set it to empty string
  let message = ""
//create a for loop that is going to run until computer or player get 5 wins.
  for (let i = 0; i < 10; i++) {
//message is equal to playRound function result 
    message = playRound();
//if message contains "You Lose" 
//increase computerScore by one
    if (message.includes("You Lose"))
    {
      computerScore++;
    }
//else if message contains "You Win"
//increase playerScore by one
    else if (message.includes("You Win")) 
    {
      playerScore++
    }

//else decrease for loop variable by one
    else
    {
      i--
    }
//console log message
//console log "Your score is: playerScore  Computer score is: computerScore"
    console.log(message);
    console.log(`Your score is: ${playerScore} and Computer score is: ${computerScore}`)

//if computerScore is equal to 5 console log "Loser! You have lost the game!"
    if (computerScore === 5)
    {
      return console.log("Loser! You have lost the game!")
    }
//if playerScore is equal to 5 console log "Congratulations! You have won the game!"
    if (playerScore === 5)
    {
      return console.log("Congratulations! You have won the game!")
    }
  }
}

