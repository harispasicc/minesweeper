import React from "react";

function Cell({ details, updateFlag, revealCell }) {
  const onClickFlag = e => {
    e.preventDefault();
    updateFlag(details.x, details.y);
  };

  const onClickUpdate = () => {
    if (details.flagged) {
      return;
    }
    revealCell(details.x, details.y);
  };

  return (
    <div
      onContextMenu={e => onClickFlag(e)}
      onClick={() => onClickUpdate()}
      className="cell"
      style={{
        background: details.Revealed
          ? details.value === "X"
          : bombChexPattern(details.x, details.y),
        color: numCode(details.value),
      }}
    >
      {!details.Revealed && details.flagged
        ? "🚩"
        : details.Revealed && details.value !== 0
        ? details.value === "X"
          ? "💣"
          : details.value
        : ""}
    </div>
  );
}

const bombChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "gray";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "lightgray";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "lightgray";
  } else {
    return "gray";
  }
};

const numCode = num => {
  if (num === 1) {
    return "red";
  } else if (num === 2) {
    return "blue";
  } else if (num === 3) {
    return "green";
  } else if (num === 4) {
    return "turquoise";
  } else if (num === 5) {
    return "orange";
  } else if (num === 6) {
    return "purple";
  } else {
    return "black";
  }
};

export default Cell;
