let minus = document.querySelector("#subtract");
let add   = document.querySelector("#add");
let guessButton = document.querySelector("#guess");
let nextRound = document.querySelector("#next-round");
let roundNumber = document.querySelector("#round-number");
let computerGuess = document.querySelector("#computer-guess");
let userGuess = document.querySelector("#human-guess");
let targetNumber = document.querySelector("#target-number");
let winnerMessage = document.querySelector("#winner");
let humanScore = document.querySelector("#human-score");
let computerScore = document.querySelector("#computer-score");
let targetNum;
let computerNum;
let computercloseto;
let usercloseto;

const setNums = () => {
   targetNum = Math.floor(Math.random() * 10);
   computerNum = Math.floor(Math.random() * 10);
}

const addMinusButtons = () => {

    add.addEventListener("click", function() {
        if(userGuess.value >= 0 && userGuess.value < 9) {
            userGuess.value ++;
        }
    });

    minus.addEventListener("click", function() {
        if(userGuess.value > 0 && userGuess.value <= 9) {
            userGuess.value --;
        }
    });

}

const winner = () => {
    computercloseto = Math.abs(targetNum - computerNum);
    usercloseto = Math.abs(targetNum - userGuess.value);
    targetNumber.textContent = targetNum;    
    computerGuess.textContent = computerNum;
    if(computercloseto === usercloseto) {
        winnerMessage.innerHTML = "Lol it's a draw!";
   } else if (computercloseto < usercloseto) {
        winnerMessage.innerHTML  = "Computer wins!";
        computerScore.textContent++;
   } else if (computercloseto > usercloseto) {
        winnerMessage.innerHTML = "User wins!";
        humanScore.textContent++;
   } 

}

function disableOrEnable() {
    nextRound.disabled = false;
    guessButton.disabled = true;

    if(guessButton.disabled === true) {
        guessButton.style.backgroundColor = "grey";
        guessButton.style.color = "white";
        guessButton.style.opacity = "50%";
    }
}

function defaultButtons() {
    nextRound.disabled = true;
    guessButton.disabled = false;

    if(guessButton.disabled === false) {
        guessButton.style.backgroundColor = "white";
        guessButton.style.color = "#4c7ef3";
        guessButton.style.opacity = "100%";
    }
}

function guess() {
    guessButton.addEventListener("click", function() {
        winner();
        disableOrEnable();
    });    
}

setNums()
addMinusButtons();
guess();

nextRound.addEventListener("click", function() {
    userGuess.value = 0;
    targetNumber.textContent = "?";    
    computerGuess.textContent = "?";
    winnerMessage.innerHTML = "";
    roundNumber.textContent ++;
    setNums();
    defaultButtons();
});
