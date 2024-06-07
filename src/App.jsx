import { useState } from "react";
import "./App.css";
import Square from "./Square";
import { cleanLocalStorage, recoverFromLocalStorage } from "./logic/storage";
import { TURNS } from "./assets/constants";
import { checkWinner } from "./logic/board";

function App() {
  const [board, setBoard] = useState(
    recoverFromLocalStorage("board", Array(9).fill(null))
  );
  const [turn, setTurn] = useState(recoverFromLocalStorage("turn", TURNS.X));
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    cleanLocalStorage();
  };

  const handleClick = (index) => {
    if (board[index] !== null || winner !== null) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", JSON.stringify(newTurn));
    setWinner(checkWinner(index, newBoard));
  };

  return (
    <section className="game">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((value, index) => {
          return (
            <Square key={index} setBoard={handleClick} index={index}>
              {value}
            </Square>
          );
        })}
      </div>
      <div className="turns">
        <div
          className={turn === TURNS.X ? "turn-square active" : "turn-square"}
        >
          <span>X</span>
        </div>
        <div
          className={turn === TURNS.O ? "turn-square active" : "turn-square"}
        >
          <span>O</span>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            resetGame();
          }}
        >
          Reset Game
        </button>
      </div>
      {winner && <h2>{winner} wins!</h2>}
    </section>
  );
}

export default App;
