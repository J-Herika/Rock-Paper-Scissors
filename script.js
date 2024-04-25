const options = ["rock", "paper", "scissors"];
let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  let randNumber = parseInt(Math.random() * 3);
  computerChoice = options[randNumber];
  return computerChoice;
}
function getHumanChoice() {
  let choice = prompt("Enter Rock Paper or Scissors!");
  choice.toLowerCase();

  if (choice === options[0] || choice === options[1] || choice === options[2]) {
    return choice;
  } else {
    console.log("you didn't enter a valid Choice");
  }
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("its a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("you win !");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("you win !");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice === "paper") {
    console.log("you win !");
    humanScore++;
  } else {
    console.log("you lose.");
    computerScore++;
  }
}

function playGame() {
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore} Computer Score: ${computerScore}`);

  if (humanScore === 5 && computerScore != 5)
    console.log(
      `YOU WON the game! you:${humanScore} : computer:${computerScore}`
    );
  else if (humanScore != 5 && computerScore === 5)
    console.log(
      `you lost the game. you:${humanScore} : computer:${computerScore}`
    );
}

for( let i= 1; i < 5; i++)
{
  playGame()
}
