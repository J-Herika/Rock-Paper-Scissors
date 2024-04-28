const options = ["rock", "paper", "scissors"];
let humanChoice;
let humanSelection;
let computerChoice;

let humanScore = 0;
let computerScore = 0;

//get access to the buttons
const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");

// to get access to the scores
const scoreHuman = document.querySelector(".scoreHuman");
const scoreComputer = document.querySelector(".scoreComputer");

//to get access to the choices
const choiceHuman = document.querySelector(".choiceHuman");
const choiceComputer = document.querySelector(".choiceComputer");

const imageOne = document.querySelector(".image01");
const imageTwo = document.querySelector(".image02");

// to get the computer choice
function getComputerChoice() {
  let randNumber = parseInt(Math.random() * 3);
  computerChoice = options[randNumber];
  imgChangerComputer();
  return computerChoice;
}

buttonRock.addEventListener("click", () => {
  humanChoice = "rock";
  imgChangerPlayer();
  playGame();
});
buttonPaper.addEventListener("click", () => {
  humanChoice = "paper";
  imgChangerPlayer();
  playGame();
});
buttonScissors.addEventListener("click", () => {
  humanChoice = "scissors";
  imgChangerPlayer();
  playGame();
});

//to get the player choice
function getHumanChoice() {
  // let choice = prompt("Enter Rock Paper or Scissors!");
  // choice.toLowerCase();
  // if (choice === options[0] || choice === options[1] || choice === options[2]) {
  //   return choice;
  // } else {
  //   console.log("you didn't enter a valid Choice");
  // }
}

// to get the result of the game round
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
  const humanSelection = humanChoice;
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  // to update the scores in real time
  scoreHuman.textContent = humanScore;
  scoreComputer.textContent = computerScore;

  // to update the chosen choices of both sides
  choiceHuman.textContent = humanChoice;
  choiceComputer.textContent = computerChoice;
}
function imgChangerPlayer() {
  switch (humanChoice) {
    case "rock":
      imageOne.src = "images/rocks.png";
      break;
    case "paper":
      imageOne.src = "images/paper.png";
      break;
    case "scissors":
      imageOne.src = "images/scissors.png";
      break;
    default:
      imageOne.src = "images/rocks.png";
      break;
  }
}
function imgChangerComputer() {
  switch (computerChoice) {
    case "rock":
      imageTwo.src = "images/rocks.png";
      break;
    case "paper":
      imageTwo.src = "images/paper.png";
      break;
    case "scissors":
      imageTwo.src = "images/scissors.png";
      break;
    default:
      imageTwo.src = "images/rocks.png";
  }
}
