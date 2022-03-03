const containerEle = document.querySelector(".container");
const resultEle = document.querySelector(".result");
const resetEle = document.querySelector(".reset");
let currentUser = "userA";
let isGameOver = false;
let noOfBoxFilled = 0;
let boxes = new Array(9).fill(null);

resetEle.addEventListener("click", () => {
  let boxesEle = document.querySelectorAll(".box");
  boxesEle.forEach((box) => {
    box.innerHTML = "";
  });
  currentUser = "userA";
  isGameOver = false;
  noOfBoxFilled = 0;
  boxes = new Array(9).fill(null);
  resultEle.innerHTML = "";
});

containerEle.addEventListener("click", (e) => {
  let boxNo = e.target.className.at(-1);
  if (
    e.target.className.startsWith("box") &&
    !isGameOver &&
    boxes[+boxNo - 1] === null
  ) {
    boxes[+boxNo - 1] = currentUser === "userA" ? 0 : 1;
    if (!e.target.hasChildNodes()) {
      noOfBoxFilled++;

      e.target.innerHTML = `<span>
              <i class="${
                currentUser === "userA"
                  ? "fa-regular fa-circle"
                  : "fa-solid fa-xmark"
              } fa-4x"></i>
            </span>`;
    }
    checkForWinner();
    toggleUser();
  }
});

function checkForWinner() {
  let winner;
  if (boxes[0] !== null && boxes[0] === boxes[1] && boxes[1] === boxes[2]) {
    winner = boxes[1];
    isGameOver = true;
  } else if (
    boxes[3] !== null &&
    boxes[3] === boxes[4] &&
    boxes[4] === boxes[5]
  ) {
    winner = boxes[4];
    isGameOver = true;
  } else if (
    boxes[6] !== null &&
    boxes[6] === boxes[7] &&
    boxes[7] === boxes[8]
  ) {
    winner = boxes[7];
    isGameOver = true;
  } else if (
    boxes[0] !== null &&
    boxes[0] === boxes[3] &&
    boxes[3] === boxes[6]
  ) {
    winner = boxes[3];
    isGameOver = true;
  } else if (
    boxes[1] !== null &&
    boxes[1] === boxes[4] &&
    boxes[4] === boxes[7]
  ) {
    winner = boxes[4];
    isGameOver = true;
  } else if (
    boxes[2] !== null &&
    boxes[2] === boxes[5] &&
    boxes[5] === boxes[8]
  ) {
    winner = boxes[5];
    isGameOver = true;
  } else if (
    boxes[2] !== null &&
    boxes[2] === boxes[4] &&
    boxes[4] === boxes[6]
  ) {
    winner = boxes[4];
    isGameOver = true;
  }

  if (!isGameOver && noOfBoxFilled === 9) {
    resultEle.innerHTML = `<h2>Game Over !<br/>Match Tied</h2>`;
  } else if (isGameOver) {
    resultEle.innerHTML = `<h2>Game Over !<br/>Winner is ${
      winner === 0 ? "O" : "X"
    }</h2>`;
  }
}
function toggleUser() {
  currentUser = currentUser === "userA" ? "userB" : "userA";
}
