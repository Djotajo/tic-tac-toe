const board = document.querySelector("#gameboard");

const newGame = document.querySelector("#newGame");

newGame.addEventListener("click", function () {
  gameboard.clear();
  gameboard.fill();
});

const winner = document.querySelector("#winner");
winner.addEventListener("click", function () {
  console.log(winner);
});

const play = function (field) {
  if (field.innerHTML === "") {
    field.innerHTML = "X";
  }
};

const gameboard = (() => {
  let sign = "X";
  winner.innerHTML = "X turn";
  let gamestatus = true;
  let state = ["", "", "", "", "", "", "", "", ""];
  const checkWinner = () => {
    if (
      (field1.innerHTML === "X") &
        (field2.innerHTML === "X") &
        (field3.innerHTML === "X") ||
      (field4.innerHTML === "X") &
        (field5.innerHTML === "X") &
        (field6.innerHTML === "X") ||
      (field7.innerHTML === "X") &
        (field8.innerHTML === "X") &
        (field9.innerHTML === "X") ||
      (field1.innerHTML === "X") &
        (field4.innerHTML === "X") &
        (field7.innerHTML === "X") ||
      (field2.innerHTML === "X") &
        (field5.innerHTML === "X") &
        (field8.innerHTML === "X") ||
      (field3.innerHTML === "X") &
        (field6.innerHTML === "X") &
        (field9.innerHTML === "X") ||
      (field1.innerHTML === "X") &
        (field5.innerHTML === "X") &
        (field9.innerHTML === "X") ||
      (field3.innerHTML === "X") &
        (field5.innerHTML === "X") &
        (field7.innerHTML === "X")
    ) {
      winner.innerHTML = "X wins";
      gamestatus = false;
    } else if (
      (field1.innerHTML === "O") &
        (field2.innerHTML === "O") &
        (field3.innerHTML === "O") ||
      (field4.innerHTML === "O") &
        (field5.innerHTML === "O") &
        (field6.innerHTML === "O") ||
      (field7.innerHTML === "O") &
        (field8.innerHTML === "O") &
        (field9.innerHTML === "O") ||
      (field1.innerHTML === "O") &
        (field4.innerHTML === "O") &
        (field7.innerHTML === "O") ||
      (field2.innerHTML === "O") &
        (field5.innerHTML === "O") &
        (field8.innerHTML === "O") ||
      (field3.innerHTML === "O") &
        (field6.innerHTML === "O") &
        (field9.innerHTML === "O") ||
      (field1.innerHTML === "O") &
        (field5.innerHTML === "O") &
        (field9.innerHTML === "O") ||
      (field3.innerHTML === "O") &
        (field5.innerHTML === "O") &
        (field7.innerHTML === "O")
    ) {
      winner.innerHTML = "O wins";
      gamestatus = false;
    } else if (state.includes("") == false) {
      winner.innerHTML = "Draw";
      gamestatus = false;
    }
  };

  const clear = () => {
    state = ["", "", "", "", "", "", "", "", ""];
    while (board.firstChild) {
      board.firstChild.remove();
    }
    sign = "X";
    gamestatus = true;
    winner.innerHTML = "X turn";
  };

  const fill = () => {
    let counter = 1;
    state.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("field");
      div.setAttribute("id", `field${counter}`);
      counter++;
      div.innerHTML = element;
      board.appendChild(div);
      div.addEventListener("click", function (event) {
        if (gamestatus === false) {
          return;
        }
        let arrayNumber = div.id.charAt(div.id.length - 1) - 1;
        state[arrayNumber] = sign;
        if (div.innerHTML === "") {
          div.innerHTML = sign;
          if (sign === "X") {
            sign = "O";
            winner.innerHTML = "O turn";
          } else if (sign === "O") {
            sign = "X";
            winner.innerHTML = "X turn";
          }
        }
        // winner.innerHTML = sign;
        console.log(state);
        checkWinner();
      });
    });
  };
  return {
    fill,
    checkWinner,
    clear,
  };
})();

const playerFactory = (name, symbol) => {
  return { name, symbol };
};

const player1 = playerFactory("jeff", "X");
const player2 = playerFactory("jeff", "o");

gameboard.fill();
