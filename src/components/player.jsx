import { useState } from "react";

export default function Player({initialName, symbol}) {
    
    const [playerName, setInitialName] = useState(initialName)
    const [ isEditing , setIsEditing] = useState(false);
    
    let editablePlayerName = <span className="player-name">{playerName}</span>
    
    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} />
    }
    
    function handleChange(event) {
        setInitialName(event.target.value);
    }
    
    function buttonClicked() {
        setIsEditing((editing) => !editing)
    }
    
    return (
        <li>
            <span className="player">
            {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={buttonClicked}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}