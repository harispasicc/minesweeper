import React from "react";

function Win({ restartGame }) {
  return (
    <div>
      <h1 className="win">You Won</h1>
      <button
        className="try-again"
        style={{ display: "flex", margin: "20px auto" }}
        onClick={restartGame}
      >
        Play Again?
      </button>
    </div>
  );
}

export default Win;
