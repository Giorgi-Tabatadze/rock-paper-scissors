//Rock Paper Scissors game - 
//We are going to be writing a program that is going to generate a random return
//of rock, paper or scissors. We will need to take a user input and compare it
//to the randomly generated rock, paper, scissors and determine who is the winner. 
//We need to play a 5 round game and determine the final winner of the round and
//start the game over once the final winner of these rounds is determined. 
//We need to add messages to the user throught the whole process so that user is
//aware of who is the winner, what is the score and what has been thrown at them.

//start by developing a program that plays one round and determines the winner. 


//create function "computerPlay" with no parameters required
//declare variable with name "n"
//n is equal to random number between 1 and 3. 
//if n is equal to 1 return a string - "rock"
//else if n is equal to 2 return a string - "paper"
//else return a string- "scissors"


//create function playRound - parameters(computerSelection, playerSelection)
//computerSelection is equal to result of computerPlay function. 
//playerSelection is equal to lower cased user input that is taken using a prompt.
//declare variable 
//if computerSelection is equal to playerSelection return a string - "its a tie!"

//if computerSelection is rock and playerSelection is scissors return a string - 
//"You Lose! Rock beats Scissors"
//if computerSelection is paper and playerSelection is rock return a string - 
//"You Lose! Paper beats Rock"
//if computerSelection is scissors and playerSelection is paper return a string -
//"You Lose! Scissors beat paper"

//if computerSelection is rock and playerSelection is paper return a string -
//"You Win! Paper beats Rock"
//if computerSelection is paper and playerSelection is scissors return a string -
//"You Win! Scissors beat Rock"
//if computerSelection is scissors and playerSelection is rock return a string- 
//"You Win! Rock beats Scisssors"

//else return a string - "Incorrect input! Please try again"


//create function game with no parameters
//declare variable computerScore and set it to 0 
//declare variable playerScore and set it to 0 
//declare variable message and set it to empty string

//create a for loop that is going to run 5 times and stop. 

//message is equal to playRound function result 

//if message contains "You Lose" 
//increase computerScore by one

//else if message contains "You Win"
//increase playerScore by one

//else decrease for loop variable by one

//console log message
//console log "Your score is: playerScore  Computer score is: computerScore"

//if computerScore or playerScore is equal to 3 stop the loop.


