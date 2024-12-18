/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll("#nav-link");

if (navToggle) {
  navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}

if (navClose) {
  navClose.addEventListener("click", () =>
    navMenu.classList.remove("show-menu")
  );

  /*=============== REMOVE MENU MOBILE ===============*/
  if (navLink) {
    navLink.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    });
  }
}

/*=============== ADD SHADOW HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", scrollHeader); // Fix event listener to call the function correctly

/*=============== Notification Adder ===============*/

function addNotificationbar() {
  const notificationBar = document.getElementById("notificationBar");
  notificationBar.classList.toggle("show-notification");
}
function removeNotificationbar() {
  const notificationBar = document.getElementById("notificationBar");
  notificationBar.classList.remove("show-notification");
}

// ==============Game logic =================================



const start_btn = document.getElementById("start-button")
const backgroundMusic = new Audio("assets/backgroundMusic.mp3")

document.addEventListener("DOMContentLoaded",()=>{
  backgroundMusic.play()
})

let scoreX = 0; // Declare score variables outside any function
let scoreO = 0;

let restart = document.getElementById('restart-button')
restart.style.display = "none"

start_btn.addEventListener("click", () => {
  restart.style.display = "block"
  start_btn.style.display = "none"
  const ting = new Audio("assets/ting.mp3");
  const music = new Audio("assets/music.mp3");
  music.play()
  backgroundMusic.pause()
  let turn = "X";
  let isGameOver = false;

  const cells = document.getElementsByClassName("cell");
  const statusDisplay = document.querySelector(".status");
  const infoDisplay = document.querySelector(".info");
  const restartButton = document.getElementById("restart-button");

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];


  // Function to update scores
  const updateScores = () => {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.innerHTML = `<div id="score"><span>X </span> <span class="score">${scoreX}</span> - <span>O </span> <span class="score">${scoreO}</span></div>
`;
  };

  // Function to check for winner
  const checkWinner = () => {
    const cellTexts = Array.from(cells).map((cell) => cell.querySelector(".text").textContent);
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (cellTexts[a] && cellTexts[a] === cellTexts[b] && cellTexts[a] === cellTexts[c]) {
        statusDisplay.textContent = `${cellTexts[a]} Wins!`;
        isGameOver = true;
        
        if (cellTexts[a] === "X") {
          scoreX++; // Increment X's score
          const danceGif = document.getElementById('win-dance')
          danceGif.src = "img/lose.gif"
          danceGif.style.scale = 1
          
          
        } else if (cellTexts[a] === "O") {
          scoreO++; // Increment O's score
          const danceGif = document.getElementById('win-dance')
          danceGif.style.scale = 1
        }
        updateScores(); // Update the displayed score
        return;
      }
    }
    // Check for a draw
    if (cellTexts.every((text) => text !== "") && !isGameOver) {
      statusDisplay.textContent = "It's a Draw!";
      isGameOver = true;
    }
  };

  // Function to reset the board
  const resetGame = () => {
    Array.from(cells).forEach((cell) => {
      cell.querySelector(".text").textContent = "";
    });
    const danceGif = document.getElementById('win-dance')
    danceGif.style.scale = 0
    turn = "X";
    isGameOver = false;
    statusDisplay.textContent = "";
    infoDisplay.textContent = "Turn: X";
    if (turn === "X") playComputerMove();
  };

  // Function to change turn
  const changeTurn = () => (turn === "X" ? "O" : "X");

  // Computer's smarter move
  const playComputerMove = () => {
    if (isGameOver) return;

    const emptyCells = Array.from(cells).filter((cell) => cell.querySelector(".text").textContent === "");

    // Try to win or block
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      const texts = combination.map((index) => cells[index].querySelector(".text").textContent);

      // Check for winning move
      if (texts.filter((text) => text === "X").length === 2 && texts.includes("")) {
        emptyCells.find((cell) => combination.includes(Array.from(cells).indexOf(cell))).querySelector(".text").textContent = "X";
        ting.play();
        checkWinner();
        turn = changeTurn();
        infoDisplay.textContent = `Turn: ${turn}`;
        return;
      }

      // Check for blocking move
      if (texts.filter((text) => text === "O").length === 2 && texts.includes("")) {
        emptyCells.find((cell) => combination.includes(Array.from(cells).indexOf(cell))).querySelector(".text").textContent = "X";
        ting.play();
        checkWinner();
        turn = changeTurn();
        infoDisplay.textContent = `Turn: ${turn}`;
        return;
      }
    }

    // Play center if available
    const centerCell = cells[4];
    if (centerCell.querySelector(".text").textContent === "") {
      centerCell.querySelector(".text").textContent = "X";
      ting.play();
      checkWinner();
      turn = changeTurn();
      infoDisplay.textContent = `Turn: ${turn}`;
      return;
    }

    // Play a random move
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    randomCell.querySelector(".text").textContent = "X";
    ting.play(); 
    checkWinner();
    turn = changeTurn();
    infoDisplay.textContent = `Turn: ${turn}`;
  };

  // Add event listeners to cells
  Array.from(cells).forEach((cell) => {
    const cellText = cell.querySelector(".text");
    cell.addEventListener("click", () => {
      if (cellText.textContent === "" && !isGameOver && turn === "O") {
        cellText.textContent = turn;
        ting.play();
        checkWinner();
        turn = changeTurn();
        if (!isGameOver) {
          infoDisplay.textContent = `Turn: ${turn}`;
          setTimeout(playComputerMove, 1000); // Add delay for computer's move
        }
      }
    });
  });

  // Add event listener to restart button
  restartButton.addEventListener("click", () => {
    resetGame();
    restartButton.textContent = "Restart";
  });

  // Start the game initially
  resetGame();
});
