export default function Log({turns}) {
  return (
    <ol id="log">
      {turns.map((turn,lmao) => <li key={lmao}>{turn.player}selected{turn.square.row},{turn.square.col}</li>)}
    </ol>
  );
}
