let playerScore = 0;
let computerScore = 0;

const playerChoices = document.querySelectorAll(".player");
const computerChoices = document.querySelectorAll(".computer");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

const announceWinner = document.querySelector(".announce-winner");
const playerDialogue = document.querySelector(".player-dialogue");
const computerDialogue = document.querySelector(".computer-dialogue");

const resetButton = document.querySelector(".reset-btn");

resetButton.addEventListener("click", () =>
{
    playerScore = 0; computerScore = 0;
    playerScoreSpan.textContent = 0; computerScoreSpan.textContent = 0;
})

playerChoices.forEach(button =>
{
    button.addEventListener("click", (e) =>
    {
        clearButtonColors();
        startRound(e.target.id, getComputerChoice());        
    })
})

function getComputerChoice()
{
    const randomInt = Math.floor(Math.random() * 100)
    if (randomInt < 33) return "rock";
    if (randomInt < 66) return "paper";
    if (randomInt < 99) return "scissors";
}

function startRound(playerChoice, computerChoice)
{
    //undefined = draw, true = win, false = lost
    let playerWon;

    if (playerChoice === "rock")
    {
        if (computerChoice === "scissors") playerWon = true;
        if (computerChoice === "paper") playerWon = false;
    }

    if (playerChoice === "paper")
    {
        if (computerChoice === "rock") playerWon = true;
        if (computerChoice === "scissors") playerWon = false;
    }

    if (playerChoice === "scissors")
    {
        if (computerChoice === "paper") playerWon = true;
        if (computerChoice === "rock") playerWon = false;
    }

    playerDialogue.textContent = "You have chosen: ";
    computerDialogue.textContent = "The computer have chosen: ";

    //edit and add spans
    const playerChosenSpan = document.createElement("span");
    const computerChosenSpan = document.createElement("span");
    playerChosenSpan.textContent = playerChoice;
    computerChosenSpan.textContent = computerChoice;
    playerChosenSpan.classList.add("chosen");
    computerChosenSpan.classList.add("chosen");
    
    playerDialogue.appendChild(playerChosenSpan);
    computerDialogue.appendChild(computerChosenSpan);

    handleWinner(playerChoice, computerChoice, playerWon);

}

function handleWinner(playerChoice, computerChoice, playerWon)
{

   if (playerWon === undefined)
    {
        announceWinner.textContent = "It's a draw."
        announceWinner.style = "color:gray";

        handleColors(playerChoice, computerChoice, "gray", "gray")

    }

    if (playerWon === true)
    {
        announceWinner.textContent = "You Won!";
        announceWinner.style = "color:green";
        playerScore++;
        playerScoreSpan.textContent = playerScore; 

        handleColors(playerChoice, computerChoice, "green", "red");

    }

    if (playerWon === false)
    {
        announceWinner.textContent = "You Lost!";
        announceWinner.style = "color:red";
        computerScore++;
        computerScoreSpan.textContent = computerScore;

        handleColors(playerChoice, computerChoice, "red", "green");
    } 
}

function clearButtonColors()
{
    playerChoices.forEach((button) =>
    {
        button.style = "";
    })

    computerChoices.forEach((button) =>
    {
        button.style = "";
    })
}

function handleColors(playerChoice, computerChoice, playerColor, computerColor)
{
        playerChoices.forEach((button) =>
        {
            if (button.id === playerChoice) button.style = `background-color: ${playerColor}`;
        })

        computerChoices.forEach((button) =>
        {
            if (button.id === computerChoice) button.style = `background-color: ${computerColor}`;
        })
}
