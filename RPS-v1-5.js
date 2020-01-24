// 3 buttons for each option
var rockBtn = document.getElementById("rockBtn");
var paperBtn = document.getElementById("paperBtn");
var scissorsBtn = document.getElementById("scissorsBtn");
var numberOfGames = 0;
//create the functions for the buttons to run
function playRock() {
  playerMove = "rock";
  playGame();
}
function playPaper() {
  playerMove = "paper";
  playGame();
}
function playScissors() {
  playerMove = "scissors";
  playGame();
}
//add the event listeners so that the buttons actually do something when clicked
rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);

function computerChoice() {
  // generate a random number between 0 and 2 which will select which option is chosen from the array
  const choices = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * choices.length);
  return choices[randomInt];
}
//create a function to change the text and colour of the text to to win or lose
function printWinningScores(message, winningClass) {
  document.getElementById("heading").innerText = message;
  document.getElementById("heading").classList.add(winningClass);
  document.getElementById("heading2").innerText = "";
  document.getElementById("scoreboard").innerText =
    "Score is: " +
    playerName +
    ": " +
    playerScore +
    ". " +
    " Computer: " +
    cpuScore;
}

// variables for games played, scores and play again
var numberOfGames = 0;
var playerScore = 0;
var cpuScore = 0;
var winner = "";
var gameResult = [];
var playerName = "";

// get user to put in a user name
var submitUsername = document.getElementById("submitUsername");
var nameInput = document.getElementById("nameInput");
submitUsername.addEventListener("click", setUsername);
nameInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    setUsername();
  }
});

//sets username to variable and stops players without a username
function setUsername() {
  playerName = document.getElementById("nameInput").value;
  if (!playerName) {
    alert("Enter a username, nerd.");
    return;
  }
  let itemsToShow = document.getElementsByClassName("initiallyHiddenItem");
  let itemsToHide = document.getElementsByClassName("itemToHide");
  for (let i = 0; i < itemsToHide.length; i++) {
    itemsToHide[i].classList.add("hiddenItem");
  }
  itemsToShow[0].classList.remove("initiallyHiddenItem");
}

//loop that asks the player if they want to play again and restarts if they do
function playGame() {
  const cpuMove = computerChoice();
  // do all the different outcomes and print if the player or CPU wins
  if (playerMove === cpuMove) {
    winner = "Its a draw";
  } else if (playerMove === "rock") {
    if (cpuMove === "paper") {
      cpuScore++;
      winner = "Computer";
    } else {
      playerScore++;
      winner = playerName;
    }
  } else if (playerMove === "paper") {
    if (cpuMove === "rock") {
      playerScore++;
      winner = playerName;
    } else {
      cpuScore++;
      winner = "Computer";
    }
  } else if (playerMove === "scissors") {
    if (cpuMove === "rock") {
      cpuScore++;
      winner = "Computer";
    } else {
      playerScore++;
      winner = playerName;
    }
  }

  // Increment the game counter
  numberOfGames++;

  // display whether the outcome is win loss or draw by changing the text currently on the page
  if (winner != "Its a draw") {
    document.getElementById("heading").innerText =
      playerName +
      " chose: " +
      playerMove +
      ". " +
      " CPU chose: " +
      cpuMove +
      ". " +
      winner +
      " wins the round!";
  } else {
    document.getElementById("heading").innerText =
      playerName +
      " chose: " +
      playerMove +
      ". " +
      " CPU chose: " +
      cpuMove +
      ". " +
      winner;
  }
  //shows how many games are left
  document.getElementById("heading2").innerText =
    5 - numberOfGames + " games left. Click a button!";
  document.getElementById("scoreboard").innerText =
    "Score is: " +
    playerName +
    ": " +
    playerScore +
    ". " +
    " Computer: " +
    cpuScore;

  // make object for results string
  var gameState = {
    playerMove,
    cpuMove,
    playerScore,
    cpuScore
  };
  // add results object to array
  gameResult.push(gameState);

  var resultString = "";

  // create game history string
  for (let i = 0; i < gameResult.length; i++) {
    resultString +=
      "<li>" +
      playerName +
      ": " +
      gameResult[i].playerMove +
      ". Computer: " +
      gameResult[i].cpuMove +
      ". Score: " +
      gameResult[i].playerScore +
      " : " +
      gameResult[i].cpuScore +
      "." +
      "</li>";
  }
  document.getElementById("gameHistoryUL").innerHTML = resultString;

  //remove the event listeners so the game can end
  if (numberOfGames >= 5) {
    rockBtn.removeEventListener("click", playRock);
    paperBtn.removeEventListener("click", playPaper);
    scissorsBtn.removeEventListener("click", playScissors);
    //display final score on the page
    if (playerScore > cpuScore) {
      printWinningScores(playerName + " wins!", "player-wins");
    } else if (cpuScore > playerScore) {
      printWinningScores("Computer wins!", "computer-wins");
      document.getElementsByTagName("body")[0].classList.add("lose-image");
    } else {
      printWinningScores("It's a draw!", "draw");
    }
    // resetGame();
  }
}

//Make a button to reset the game
// function resetGame() {
//   var resetBtn = document.getElementsByClassName("resetButton");
//   resetBtn[0].classList.remove("resetButton");
//   resetBtn[0].addEventListener("click", resetGameLogic());
// }

// // Reset game function
// function resetGameLogic() {
//   console.log("Triggered");
// }
