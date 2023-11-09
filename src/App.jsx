import { useState } from "react";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer == "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player == "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Wilton" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Gary" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <Gameboard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
