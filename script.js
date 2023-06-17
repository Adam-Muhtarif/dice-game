//write code here
let newGameBtn = document.querySelector(".btn--new"),
  rollDiceBtn = document.querySelector(".btn--roll"),
  holdBtn = document.querySelector(".btn--hold"),
  playerOne = document.querySelector(".player--0"),
  playerOneScore = document.getElementById("score--0"),
  playerTwo = document.querySelector(".player--1"),
  playerTwoScore = document.getElementById("score--1"),
  diceImage = document.querySelector(".dice"),
  dice,
  currentPlusDice,
  sum,
  activePlayerCurrent,
  activePlayerScore;

function ChangePlayer() {
  if (playerOne.classList.contains("player--active")) {
    playerOne.classList.remove("player--active");
    playerTwo.classList.add("player--active");
  } else {
    playerTwo.classList.remove("player--active");
    playerOne.classList.add("player--active");
  }
}
function checkPoint() {
  activePlayerCurrent.textContent = 0;
  activePlayerScore = document.querySelector(".player--active .score");
  sum = +activePlayerScore.textContent + currentPlusDice;
  activePlayerScore.textContent = sum;
  ChangePlayer();
}

rollDiceBtn.addEventListener("click", () => {
  // Random Dice
  dice = Math.floor(Math.random() * 6) + 1;
  diceImage.setAttribute("src", `dice-${dice}.png`);

  if (dice !== 1) {
    activePlayerCurrent = document.querySelector(
      ".player--active .current-score"
    );
    currentPlusDice = +activePlayerCurrent.textContent + dice;
    activePlayerCurrent.textContent = currentPlusDice;
  } else {
    checkPoint();
  }
});
