import React from "react";
import Square from "./Square";

function calculateWinner(squares, won) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      won[a] = true;
      won[b] = true;
      won[c] = true;
      return squares[a];
    }
  }
  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  const won = Array(9).fill(false);
  const winner = calculateWinner(squares, won);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else if (squares.every((square) => square !== null)) {
    status = "Draw";
  } else {
    status = "Next player is " + (xIsNext ? "X" : "O");
  }
  function handleClick(i) {
    console.log(winner);
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  return (
    <div className="board">
      <div className="board-status">{status}</div>
      <div className="board-grid">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isWon={won[0]}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isWon={won[1]}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isWon={won[2]}
        />
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isWon={won[3]}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isWon={won[4]}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isWon={won[5]}
        />
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isWon={won[6]}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isWon={won[7]}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isWon={won[8]}
        />
      </div>
    </div>
  );
}

export default Board;
