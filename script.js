function getRandomNumber(min, max)
{
    var randomDecimal = Math.random();
  
    var randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
  
    return randomNumber;
}
function win(a, b)
{
    if (
            (a == "rock" && b == "scissors") ||
            (a == "scissors" && b == "paper") ||
            (a == "paper" && b == "rock")
        )
        return 1;
    return 0;
}

function calculate(playerOption)
{
    let result;
    let computerOptions = ["rock", "paper", "scissors"];
    let computerOption;

    computerOption = computerOptions[getRandomNumber(0, 2)];

    displayVS.innerHTML = `you: ${playerOption} vs computer: ${computerOption}`;

    console.log(computerOption);
    if (playerOption != computerOption)
    {
        if (win(playerOption, computerOption))
            return 1;
        return -1;
    }
    return 0
}

function handler(playerOption, playerScore, computerScore)
{
    let resultDiv = document.getElementById("result");
    let playerDiv = document.getElementById("player");
    let computerDiv = document.getElementById("computer");

    let result;

    console.log(playerOption);

    result = calculate(playerOption);

    console.log(result);

    if (result === 1)
        playerScore++;
    else if (result === -1)
        computerScore++;

    playerDiv.innerHTML = `player: ${playerScore}`;
    computerDiv.innerHTML = `computer: ${computerScore}`;

    
    let resultText = document.createElement("p");
    resultText.setAttribute("id", "resultText")

    let tryAgain = document.createElement("button");
    tryAgain.setAttribute("id", "tryAgain");

    tryAgain.textContent = "tRY aGAIN";

    if (playerScore === 5 || computerScore === 5)
    {
        if (playerScore === 5)
            resultText.textContent = "yOU wON";
        else if (computerScore === 5)
            resultText.textContent = "yOU lOST";
        
        resultDiv2.appendChild(resultText);
        resultDiv2.appendChild(tryAgain);
    }

    return [playerScore, computerScore];
}

let playerOptions = document.getElementById("options");
let playerOption;

let playerScore;
let computerScore;

playerScore = 0;
computerScore = 0;

let playable;
let score;

let resultDiv = document.getElementById("result");
let resultDiv2 = document.getElementById("result2");

let displayVS = document.getElementById("displayVS");

playerOptions.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON")
    {
        playerOption = event.target.textContent;

        playable = ((playerScore < 5) && (computerScore < 5));
        if (playable)
        {
            score = handler(playerOption, playerScore, computerScore);
        }
        playerScore = score[0];
        computerScore = score[1];
    }
})

resultDiv2.addEventListener("click", function(event) {

    if (event.target.nodeName === "BUTTON")
    {

        let resultDiv2 = document.getElementById("result2");
        let playerDiv = document.getElementById("player");
        let computerDiv = document.getElementById("computer");

        let resultText =  document.getElementById("resultText");
        let tryAgain =  document.getElementById("tryAgain");


        playerScore = 0;
        computerScore = 0;

        playerDiv.innerHTML = `player: ${playerScore}`;
        computerDiv.innerHTML = `computer: ${computerScore}`;

        console.log("tRY aGain");

        resultDiv2.removeChild(resultText);
        resultDiv2.removeChild(tryAgain);
        displayVS.innerHTML = "you: ? vs computer: ?";
    }
})
