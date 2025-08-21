let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

document.addEventListener('DOMContentLoaded', () => {
  
  showOnlyLeft('rock');
  showOnlyRight('rock');

  
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => getPlayerChoice(btn.id));
  });
});

function getPlayerChoice(choice) {
  
showOnlyLeft(choice);

const computerChoice = getComputerChoice();
const result = getResult(choice, computerChoice);
updateScore(result);
updateMessage(result);

console.log(choice, computerChoice, result);
}


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * choices.length);
  const choice = choices[index];

  ['rock-right', 'paper-right', 'scissors-right'].forEach(id => {
  document.getElementById(id).classList.add('hidden');
  });

  document.getElementById(`${choice}-right`).classList.remove('hidden');

  return choice; 
}

function showOnlyLeft(choice) {
  const ids = ['rock-left', 'paper-left', 'scissors-left'];
  ids.forEach(id => document.getElementById(id).classList.add('hidden'));
  document.getElementById(`${choice}-left`).classList.remove('hidden');
}

function showOnlyRight(choice) {
  const ids = ['rock-right', 'paper-right', 'scissors-right'];
  ids.forEach(id => document.getElementById(id).classList.add('hidden'));
  document.getElementById(`${choice}-right`).classList.remove('hidden');
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "win";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "win";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "win";
  } else {
    return "lose";
  }
}

function updateScore(result) {
  if (result === "win") {
    playerScore++;
    document.getElementById("player-score").textContent = playerScore;
  } else if (result === "lose") {
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
  } else if (result === "draw") {
    drawScore++;
    document.getElementById("draw-score").textContent = drawScore;
  }
}

function updateMessage(result) {
  const header1 = document.getElementById("header-1");
  const header2 = document.getElementById("header-2");
  const playerMessage = document.getElementById("player-message");

  if (result === "win") {
    header1.textContent = "VICTORY!";
    header2.textContent = "YOU CRUSHED THE COMPUTER";
  } else if (result === "lose") {
    header1.textContent = "OUCH!";
    header2.textContent = "BETTER LUCK NEXT TIME";
  } else if (result === "draw") {
    header1.textContent = "DRAW!";
    header2.textContent = "TRY AGAIN FOR GLORY";
  }
}