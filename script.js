const board = document.querySelector("#gameboard");

const winner = document.querySelector("#winner");
winner.addEventListener("click", function () {
  console.log(winner);
});

const play = function (field) {
  if (field.innerHTML === "") {
    field.innerHTML = "x";
  }
};

const gameboard = (() => {
  let sign = "x";
  let gamestatus = true;
  const state = ["", "", "", "", "", "", "", "", ""];
  const checkWinner = () => {
    if (
      (field1.innerHTML === "x") &
        (field2.innerHTML === "x") &
        (field3.innerHTML === "x") ||
      (field4.innerHTML === "x") &
        (field5.innerHTML === "x") &
        (field6.innerHTML === "x") ||
      (field7.innerHTML === "x") &
        (field8.innerHTML === "x") &
        (field9.innerHTML === "x") ||
      (field1.innerHTML === "x") &
        (field4.innerHTML === "x") &
        (field7.innerHTML === "x") ||
      (field2.innerHTML === "x") &
        (field5.innerHTML === "x") &
        (field8.innerHTML === "x") ||
      (field3.innerHTML === "x") &
        (field6.innerHTML === "x") &
        (field9.innerHTML === "x") ||
      (field1.innerHTML === "x") &
        (field5.innerHTML === "x") &
        (field9.innerHTML === "x") ||
      (field3.innerHTML === "x") &
        (field5.innerHTML === "x") &
        (field7.innerHTML === "x")
    ) {
      winner.innerHTML = "x wins";
      gamestatus = false;
    } else if (
      (field1.innerHTML === "o") &
        (field2.innerHTML === "o") &
        (field3.innerHTML === "o") ||
      (field4.innerHTML === "o") &
        (field5.innerHTML === "o") &
        (field6.innerHTML === "o") ||
      (field7.innerHTML === "o") &
        (field8.innerHTML === "o") &
        (field9.innerHTML === "o") ||
      (field1.innerHTML === "o") &
        (field4.innerHTML === "o") &
        (field7.innerHTML === "o") ||
      (field2.innerHTML === "o") &
        (field5.innerHTML === "o") &
        (field8.innerHTML === "o") ||
      (field3.innerHTML === "o") &
        (field6.innerHTML === "o") &
        (field9.innerHTML === "o") ||
      (field1.innerHTML === "o") &
        (field5.innerHTML === "o") &
        (field9.innerHTML === "o") ||
      (field3.innerHTML === "o") &
        (field5.innerHTML === "o") &
        (field7.innerHTML === "o")
    ) {
      winner.innerHTML = "o wins";
      gamestatus = false;
    } else if (state.includes("") == false) {
      winner.innerHTML = "draw";
      gamestatus = false;
    }
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
          if (sign === "x") {
            sign = "o";
          } else if (sign === "o") {
            sign = "x";
          }
        }
        console.log(state);
        checkWinner();
      });
    });
  };
  return {
    fill,
    checkWinner,
  };
})();

const playerFactory = (name, symbol) => {
  return { name, symbol };
};

const player1 = playerFactory("jeff", "x");
const player2 = playerFactory("jeff", "o");

gameboard.fill();
