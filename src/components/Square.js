import React from "react";

function Square({ value, onSquareClick, isWon = false }) {
  return (
    <button
      className={"square"}
      style={{
        color: isWon
          ? "var(--win-square-color)"
          : value === "O"
          ? "var(--primary-color)"
          : "var(--secondary-color)",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
export default Square;
