import React from "react";

function StartGame({ ShowToggle }) {
  return (
    <div className="start">
      <h1>Welcome to Minesweeper Game. </h1>
      <h1>Click Start Game to begin.</h1>
      <button className="start-button" onClick={ShowToggle}>
        Start Game
      </button>
    </div>
  );
}

export default StartGame;
