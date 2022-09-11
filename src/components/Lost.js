import React from "react";

function Lost({ restartGame }) {
  return (
    <div>
      <h1 className="lost">You Lost</h1>
      <button
        style={{ display: "flex", margin: "20px auto" }}
        onClick={restartGame}
        className="try-again"
      >
        Play Again?
      </button>
    </div>
  );
}

export default Lost;
