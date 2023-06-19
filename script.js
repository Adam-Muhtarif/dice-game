//write code here
const playerOne = document.querySelector(".player--0"),
  playerTwo = document.querySelector(".player--1");
let activePlayer = document.querySelector(".player--active");

// ============== Functions ================
function initGame() {
  document.querySelectorAll(".player").forEach((player) => {
    player.classList.remove("player--active");
    player.classList.remove("player--winner");
    player.querySelector(".score").textContent = 0;
    player.querySelector(".current-score").textContent = 0;
  });
  playerOne.classList.add("player--active");
}
initGame();

/* 
  1. Set the new random dice
  2. If dice not equal to 1 update current value 
    by currentValue += dice
  3. else set current value 0 and switch player
*/
function keepPlaying(dice) {
  document.querySelector(".dice").setAttribute("src", `dice-${dice}.png`);
  if (dice !== 1) {
    activePlayer.querySelector(".current-score").textContent =
      +activePlayer.querySelector(".current-score").textContent + dice;
  } else {
    activePlayer.querySelector(".current-score")
      ? (activePlayer.querySelector(".current-score").textContent = 0)
      : "";

    switchPlayer();
  }
}

/* 
  1. Check if the active player's current value not equal to 0 
    because we need a value > 0 to hold
  2. if true activePlayer's score += activePlayer's current
  3. set active player's current 0
  4. if active player's score >= 100 end game by giving him class "player--winner"
*/
function holdPoints() {
  if (activePlayer.querySelector(".current-score").textContent > 0) {
    activePlayer.querySelector(".score").textContent =
      +activePlayer.querySelector(".score").textContent +
      +activePlayer.querySelector(".current-score").textContent;

    activePlayer.querySelector(".current-score").textContent = 0;

    if (activePlayer.querySelector(".score").textContent >= 100) {
      activePlayer.classList.add("player--winner");
    }
  }
}

// Check if there is a winner if true return false else keep playing
function checkEndGame(dice) {
  if (
    playerOne.classList.contains("player--winner") ||
    playerTwo.classList.contains("player--winner")
  ) {
    return false;
  } else if (dice) {
    // keepPlaying function only works when we call checkEndGame from rollDiceBtn
    keepPlaying(dice);
    // holdPoints function only works when we call checkEndGame from holdBtn
  } else holdPoints();
}

function switchPlayer() {
  playerOne.classList.toggle("player--active");
  playerTwo.classList.toggle("player--active");
}

// ============== Buttons ================
/* 
  1. Get active player.
  2. Generate random dice
  3. Check if game end
*/
document.querySelector(".btn--roll").addEventListener("click", () => {
  activePlayer = document.querySelector(".player--active");
  let dice = Math.floor(Math.random() * 6) + 1;
  return checkEndGame(dice);
});

/* 
  1. check if game end, if not true switch player
  2. if true return false
*/
document.querySelector(".btn--hold").addEventListener("click", () => {
  if (checkEndGame() !== false) {
    switchPlayer();
  } else return false;
});

/*
  1. Remove player--active 
  2. Remove player--winner
  3. Set score and currentScore to 0
  4. Set player 1 as starting player
*/
document.querySelector(".btn--new").addEventListener("click", () => {
  initGame();
});
