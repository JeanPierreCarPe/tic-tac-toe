import { winningCombos } from "../assets/constants";

export const checkWinner = (index, board) => {
  let combos = [];

  winningCombos.forEach((combo) => {
    if (combo.includes(index)) {
      combos.push(combo);
    }
  });

  combos.forEach((combo) => {
    if (
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    ) {
      return (board[combo[0]]);
    }
  });

  if (board.every((value) => value !== null)) {
    return ("It's a tie!");
  }
};
