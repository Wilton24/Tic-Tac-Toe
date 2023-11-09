import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayername] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let editSave = "Edit";
  let playerNameField = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNameField = (
      <input
        type="text"
        required
        value={playerName}
        onChange={(e) => setPlayername(e.target.value)}
      ></input>
    );
    editSave = "Save";
  }

  function editName() {
    setIsEditing(true);
    if (editSave == "Save") {
      editSave = "Edit";
      setIsEditing(false);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => editName()}>{editSave}</button>
    </li>
  );
}
