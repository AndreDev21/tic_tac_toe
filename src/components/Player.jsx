import { useRef, useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setInitialName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buttonClicked();
    }
  };
  
  if (isEditing) {
    editablePlayerName = (
      <input ref={inputRef} type="text" value={playerName} onChange={handleChange}  onKeyDown={handleKeyDown} />
    );
  }

  function handleChange(event) {
    setInitialName(event.target.value);
  }

  function buttonClicked() {
    setIsEditing((editing) => !editing);
    setTimeout(() => inputRef.current?.focus(), 0);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  
  
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={buttonClicked}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
