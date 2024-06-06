import { useState } from "react";
import "./App.css";
import Square from "./Square";

const TURNS = {
  X: "X",
  O: "O",
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    console.log(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
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
        <div className={turn === TURNS.X ? 'turn-square active' : 'turn-square'}>
          <span>X</span>
        </div>
        <div className={turn === TURNS.O ? 'turn-square active' : 'turn-square'}>
          <span>O</span>
        </div>
      </div>
      <div>
        <button>Reset Game</button>
      </div>
    </section>
  );
}

export default App;
