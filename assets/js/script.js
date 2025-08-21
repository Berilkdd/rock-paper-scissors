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

console.log(choice, computerChoice);
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


