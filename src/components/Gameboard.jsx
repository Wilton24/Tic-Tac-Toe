const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare, turns }) {
  let gameboard = initialGameboard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
