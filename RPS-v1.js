// 3 buttons for each option 
var rockBtn = document.getElementById("rockBtn");
var paperBtn = document.getElementById("paperBtn");
var scissorsBtn = document.getElementById("scissorsBtn");
var numberOfGames = 0;
//create the functions for the buttons to run
function playRock(){
    playerMove = "rock";
    playGame();
}
function playPaper(){
    playerMove = "paper";
    playGame();
}
function playScissors(){
    playerMove = "scissors";
    playGame();
}
//add the event listeners so that the buttons actually do something when clicked
rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);

// animation countdown

function computerChoice(){
    // generate a random number between 0 and 2 which will select which option is chosen from the array
    var choices = ["rock", "paper", "scissors"];
    var randomInt = Math.floor(Math.random()*choices.length)
    console.log("The playerMove is:", playerMove, "and the cpuMove is:", choices[randomInt])
    return choices[randomInt];  
}
//create a function to change the text and colour of the text to to win or lose 
function printWinningScores(message, winningClass){
    document.getElementById("heading").innerText = message;
    document.getElementById("heading").classList.add(winningClass); 
    document.getElementById("heading2").innerText = "";
    document.getElementById("scoreboard").innerText = "Score is: Player: " + playerScore + " Computer: " + cpuScore;
}

// variables for games played, scores and play again
var numberOfGames = 0;
var playerScore = 0;
var cpuScore = 0;
var winner = "";

//loop that asks the player if they want to play again and restarts if they do
function playGame(){
    // var playerMove = prompt("rock, paper or scissors?");
    var cpuMove = computerChoice(); 
    // do all the different outcomes and print if the player or CPU wins
    if(playerMove === cpuMove){
        console.log("it's a draw")
        winner = "Its a draw";
    } else if(playerMove === "rock"){
        if(cpuMove === "paper" ){
            console.log("CPU Wins!")
            cpuScore++
            winner = "Computer";
        }
        else{
            console.log("Player Wins!")
            playerScore++
            winner = "Player";
        }
    } 
    else if(playerMove === "paper"){ 
        if(cpuMove === "rock"){
            console.log("Player Wins!")
            playerScore++
            winner = "Player";
        }
        else{
            console.log("CPU Wins!")
            cpuScore++
            winner = "Computer";
        }
    }
    else if(playerMove === "scissors"){
        if(cpuMove === "rock"){
            console.log("CPU Wins!")
            cpuScore++
            winner = "Computer";
        }
        else{
            console.log("Player Wins!")
            playerScore++
            winner = "Player";
        }
    }
    // print something that alerts the player if they've typed wrong
    else{
        console.log("Error, enter rock, paper or scissors in lowercase.")
    }
    console.log("score is: Player:", playerScore, "Computer:", cpuScore)

    numberOfGames++;
    // display whether the outcome is win loss or draw by changing the text currently on the page
    if (winner!= "Its a draw"){
        document.getElementById("heading").innerText = "Player chose: " + playerMove + ". "+ " CPU chose: " + cpuMove + ". " + winner + " wins the round!";
    }
    else{
        document.getElementById("heading").innerText = "Player chose: " + playerMove + " CPU chose: " + cpuMove + ". " + winner;
    }
    document.getElementById("heading2").innerText = 5 - numberOfGames + " games left. Click a button!"
    document.getElementById("scoreboard").innerText = "Score is: Player: " + playerScore + " Computer: " + cpuScore;
    
    //remove the event listeners so the game can end
    if (numberOfGames >= 5){
        rockBtn.removeEventListener("click", playRock);
        paperBtn.removeEventListener("click", playPaper);
        scissorsBtn.removeEventListener("click", playScissors);
        //display final score on the page
        if(playerScore > cpuScore){
            printWinningScores("Player wins!", "player-wins");
        } else if(cpuScore > playerScore) {
            printWinningScores("Computer wins!", "computer-wins");
        } else {
            printWinningScores("It's a draw!", "draw");
        }
    }
}
