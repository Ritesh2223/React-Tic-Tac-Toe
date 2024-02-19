import { useState } from "react";

export default function Player({Intialname, symbol, isActive, onChangeName}) {

    const[ playername, SetPlayername ] = useState(Intialname);
    const [ isEditing, setIsEditing ] = useState(false);
    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playername);
        }
    }

    function handleChange(event) {
        // console.log(event);
        SetPlayername(event.target.value)
    }

    let EditableName = <span className="player-name">{playername}</span>;
    // let btntext = "Edit"
    
    if(isEditing) {
        EditableName = <input type="text" required value={playername} onChange={handleChange}/>;    
        // btntext = "Save"
    }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {EditableName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
          </li>
        );
}   