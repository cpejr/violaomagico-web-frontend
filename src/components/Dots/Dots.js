import React from "react";
import {
    Dot,
  } from "./Styles";

function Dots({setChord, chord, position, note}) {

    function handleDotChange() {
        const auxChord = [...chord];

        if (!auxChord[position][note]) {
            auxChord[position]={...auxChord[position],[note]: true};

        }
        else if (auxChord[position][note]) {
            auxChord[position]={...auxChord[position],[note]: false};

        }
    setChord(auxChord);
    }

    return(
        <Dot onClick={handleDotChange} state={chord[position][note]}/>
    )
}

export default Dots;