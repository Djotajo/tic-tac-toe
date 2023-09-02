const board = document.querySelector("#gameboard");

const newGame = document.querySelector("#newGame");

let playsFirst = 1;

newGame.addEventListener("click", function () {
  gameboard.clear();
  gameboard.fill();
});

const winner = document.querySelector("#winner");
winner.addEventListener("click", function () {
  console.log(winner);
});

const play = function (field) {
  if ((field.innerHTML === "") & (playsFirst === 1)) {
    field.innerHTML = "X";
  } else if ((field.innerHTML === "") & (playsFirst === 2)) {
    field.innerHTML = "O";
  }
};

const gameboard = (() => {
  let sign = "X";
  if (playsFirst === 1) {
    sign = "X";
    winner.innerHTML = "X turn";
  } else if (playsFirst === 2) {
    sign = "O";
    winner.innerHTML = "O turn";
  }
  let gamestatus = true;
  let state = ["", "", "", "", "", "", "", "", ""];
  const player1score = document.querySelector("#player1score");
  const player2score = document.querySelector("#player2score");

  const turn = () => {
    if (playsFirst === 1) {
      playsFirst = 2;
    } else if (playsFirst === 2) {
      playsFirst = 1;
    }
  };

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
      player1.score++;
      gamestatus = false;
      player1score.innerHTML = `${player1.score}`;
      winner.classList.add("end");
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
      player2.score++;
      gamestatus = false;
      player2score.innerHTML = `${player2.score}`;
      winner.classList.add("end");
    } else if (state.includes("") == false) {
      winner.innerHTML = "Draw";
      gamestatus = false;
      winner.classList.add("end");
    }
  };

  const clear = () => {
    state = ["", "", "", "", "", "", "", "", ""];
    while (board.firstChild) {
      board.firstChild.remove();
    }
    // sign = "X";
    gamestatus = true;
    turn();
    // winner.innerHTML = "X turn";
    winner.classList.remove("end");
    if (playsFirst === 1) {
      sign = "X";
      winner.innerHTML = "X turn";
    } else if (playsFirst === 2) {
      sign = "O";
      winner.innerHTML = "O turn";
    }
    console.log(playsFirst);
  };

  const fill = () => {
    let counter = 1;
    state.forEach((element) => {
      const div = document.createElement("div");
      // div.classList.add("field");
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
          div.classList.add("field");
          if (sign === "X") {
            sign = "O";
            winner.innerHTML = "O turn";
          } else if (sign === "O") {
            sign = "X";
            winner.innerHTML = "X turn";
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
    clear,
  };
})();

const playerFactory = (name, symbol, score) => {
  return { name, symbol, score };
};

let player1 = playerFactory("Player 1", "X", 0);
let player2 = playerFactory("Player 2", "O", 0);

gameboard.fill();

const showButton1 = document.getElementById("player1Dialog");
const playerName1 = document.getElementById("playerName1");

showButton1.addEventListener("click", () => {
  playerName1.showModal();
});

const confirmBtn1 = playerName1.querySelector("#confirmBtn1");
const closeBtn1 = playerName1.querySelector("#closeBtn1");
const player1field = document.querySelector("#player1Dialog");

closeBtn1.addEventListener("click", () => {
  playerName1.close();
  myForm1.reset();
});

confirmBtn1.addEventListener("click", (event) => {
  console.log("wtf");
  const formCheck = document.getElementById("myForm1").checkValidity();
  if (!formCheck) {
    document.getElementById("myForm1").reportValidity();
  } else {
    event.preventDefault();
    player1 = playerFactory(name1.value, "X", 0);
    playerName1.close();
  }
  showButton1.innerHTML = player1.name;
  player1score.innerHTML = `${player1.score}`;
  console.log(player1);
  myForm1.reset();
});

document.getElementById("myForm1").checkValidity();

const showButton2 = document.getElementById("player2Dialog");
const playerName2 = document.getElementById("playerName2");

showButton2.addEventListener("click", () => {
  playerName2.showModal();
});

const confirmBtn2 = playerName2.querySelector("#confirmBtn2");
const closeBtn2 = playerName2.querySelector("#closeBtn2");
const player2field = document.querySelector("#player2Dialog");

closeBtn2.addEventListener("click", () => {
  playerName2.close();
  myForm2.reset();
});

confirmBtn2.addEventListener("click", (event) => {
  const formCheck = document.getElementById("myForm2").checkValidity();
  if (!formCheck) {
    document.getElementById("myForm2").reportValidity();
  } else {
    event.preventDefault();
    player2 = playerFactory(name2.value, "O", 0);
    playerName2.close();
  }
  showButton2.innerHTML = player2.name;
  player2score.innerHTML = `${player2.score}`;
  console.log(player2);
  myForm2.reset();
});

document.getElementById("myForm2").checkValidity();
