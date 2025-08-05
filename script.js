let playerScore = 0;
let computerScore = 0;

const startButton = document.querySelector(".start-btn");
const dialogue =  document.querySelector(".display-dialogue");
const displayWinner = document.querySelector(".display-winner");
const playerScoreHTML = document.querySelector(".player-score");
const computerScoreHTML = document.querySelector(".computer-score");
const playerInput = document.querySelector(".player-input");
const goBtn = document.querySelector(".go-btn");

startButton.addEventListener("click", () =>
{
    startButton.setAttribute("disabled", true);
    resetScores();
    goBtn.removeAttribute("disabled");
});

goBtn.addEventListener("click", () =>
{
    let humanChoice = playerInput.value;
    playRound(humanChoice, getComputerChoice());
    checkWinner();

});

// Computer 
function getComputerChoice()
{
    let randomNumber = parseInt(Math.random() * 100);

    if (randomNumber < 33) return "rock";
    if (randomNumber < 66) return "paper";
    else return "scissors";
}

//Human

//game logic

function playRound(humanChoice, computerChoice)
{
    //0 - lose, 1 - true, 2 - tie
    let playerWon;

    console.log(humanChoice + ", " + computerChoice);

    //tie
    //check win/loss for each human choice
    if (humanChoice === "rock")
    {
        if (computerChoice === "scissors") 
        {
            playerScore++;
            playerWon = true;
        }
        if (computerChoice === "paper") 
        {
            computerScore++;
            playerWon = false;
        }

    }

    if (humanChoice === "paper")
    {
        if (computerChoice === "rock") 
        {
            playerScore++;
            playerWon = true;
        }
        if (computerChoice === "scissors") 
        {
            computerScore++;
            playerWon = false;
        }
    }

    if (humanChoice === "scissors")
    {
        if (computerChoice === "paper") 
        {
            playerScore++;

            playerWon = true;
        }
        if (computerChoice === "rock") 
        {
            computerScore++;
            playerWon = false;
        }
    }

    console.log(`player won: ${playerWon}`);
    dialogue.textContent = `You have chosen ${humanChoice} and the computer has chosen ${computerChoice}.`;

    if (playerWon === undefined)
    {
        dialogue.textContent = ``;
        displayWinner.textContent = "invalid option. Please try again.";
        displayWinner.style.color = "blue";

    }

    else if (humanChoice === computerChoice)
    {
        displayWinner.textContent = "It's a tie!";
        displayWinner.style.color = "darkgray";
    }

    else if (playerWon)
    {
        displayWinner.textContent = "You Won!";
        displayWinner.style.color = "green";
    }

    else 
    {
        displayWinner.textContent = "Computer Won!";
        displayWinner.style.color = "red";
    }

    playerScoreHTML.textContent = playerScore;
    computerScoreHTML.textContent = computerScore; 

}

function checkWinner()
{    
    if (playerScore >= 3 || computerScore >= 3)
    {
        startButton.removeAttribute("disabled");
        goBtn.setAttribute("disabled", "true");
        if (playerScore >= 3) alert("You won the round!");
        else alert("Computer has won the round!");
    } 
    
}

function resetScores()
{
    playerScore = 0;
    computerScore = 0;
    playerScoreHTML.textContent = playerScore;
    computerScoreHTML.textContent = computerScore;
}
