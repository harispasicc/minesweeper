import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import CreateBoard from "./CreateBoard";
import Win from "./Win";
import Lost from "./Lost";
import Revealed from "./Reveal";
import StartGame from "./StartGame";

function Board() {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocation, setMineLocation] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [mine, setMine] = useState(10);
  const [show, setShow] = useState(false);

  useEffect(() => {
    freshBoard();
  }, []);

  function freshBoard() {
    const newBoard = CreateBoard(8, 8, 10);
    setNonMineCount(8 * 8 - 10);
    setMineLocation(newBoard.mineLocation);
    setGrid(newBoard.board);
  }

  const ShowToggle = () => {
    setShow(true);
  };

  const restartGame = () => {
    freshBoard();
    setGameOver(false);
    setGameLost(false);
    setMine(10);
  };

  const updateFlag = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = !newGrid[x][y].flagged;
    if (newGrid[x][y].flagged && mine >= 1) {
      setMine(mine - 1);
    } else if (!newGrid[x][y].flagged && mine <= 9) {
      setMine(mine + 1);
    } else {
      return;
    }
    setGrid(newGrid);
  };

  const revealCell = (x, y) => {
    if (grid[x][y].Revealed || gameOver || gameLost) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      for (let i = 0; i < mineLocation.length; i++) {
        newGrid[mineLocation[i][0]][mineLocation[i][1]].Revealed = true;
      }
      setGrid(newGrid);
      setGameLost(true);
    } else {
      let newRevealedBoard = Revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedBoard.arr);
      setNonMineCount(newRevealedBoard.newNonMinesCount);
      if (newRevealedBoard.newNonMinesCount === 0) {
        setGameOver(true);
      }
    }
  };

  return (
    <div>
      {!show && <StartGame ShowToggle={ShowToggle} />}
      {show && (
        <div>
          <div className="title">
            <h1>Minesweeper</h1>
            <p>Mines remaining: {mine}</p>
          </div>
          <div className="board">
            {grid.map((singleRow, i1) => {
              return (
                <div className="board-in" key={i1}>
                  {singleRow.map((singleBlock, i2) => {
                    return (
                      <Cell
                        key={i2}
                        revealCell={revealCell}
                        details={singleBlock}
                        updateFlag={updateFlag}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          {gameLost && <Lost restartGame={restartGame} />}
          {gameOver && <Win restartGame={restartGame} />}
        </div>
      )}
    </div>
  );
}

export default Board;
