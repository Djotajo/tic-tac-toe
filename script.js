const board = document.querySelector("#gameboard");

const gameboard = (() => {
  const state = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
  const fill = () => {
    state.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("field");
      div.innerHTML = element;
      board.appendChild(div);
    });
  };
  return {
    fill,
  };
})();

gameboard.fill();

// bookInfo.splice(0, 3).forEach((info) => {
//     const para = document.createElement("p");
//     para.innerHTML = info;
//     div.appendChild(para);
//   });
//   const readBook = readButton(book);
//   div.appendChild(readBook);
//       });
