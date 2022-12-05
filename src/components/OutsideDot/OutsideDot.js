import React, { useEffect } from "react";
import {
    Button,
  } from "./Styles";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const  ENABLED_CHORDS = {        
  e:true,
  B:true,
  G:true,
  D:true,
  A:true,
  E:true,
  flow: "empty"}

  const  DISABLED_CHORDS = {        
    e:false,
    B:false,
    G:false,
    D:false,
    A:false,
    E:false,
    flow: "empty"}

function OutsideDot({setChord, chord, position, note}) {

function handleButtonChange() {
    const auxChord = [...chord];

    if (auxChord[position].flow === "empty") {
        auxChord[position] = {...ENABLED_CHORDS, flow: "s"} 
    }
    else if (auxChord[position].flow === "s") {
        auxChord[position] = {...ENABLED_CHORDS, flow: "d"} 
    }
    else if (auxChord[position].flow === "d") {
        auxChord[position] = {...DISABLED_CHORDS, flow: "empty"} 
    }
    setChord(auxChord);
}

    return(
        <Button onClick={handleButtonChange} state={(chord[position].flow)}>
            {chord[position].flow === "s" && <FaArrowUp/>}
            {chord[position].flow === "d" && <FaArrowDown/>}
        </Button>
    )
}

export default OutsideDot;