import React, { useState } from "react";
import CreateMusic from "../../components/CreateMusic/CreateMusic";
import {
    BotaoNovaBatida,
    Container,
    BotaoEncerrar
  } from "./Styles";
import { defaultChord } from "../../utils/ChordUtils";
import { saveAs } from "file-saver";

function Test() {

    const [ music, setMusic ] = useState([defaultChord])

    let handleAddComponent = (e) => {
        e.preventDefault()
        setMusic([...music,defaultChord])
    }

    var content = "X(BPM escolhido)\n 1<\ns\nd\nd\ns\nBGDA\n \n \neBG\n>";
    var filename = "music.txt";

    var blob = new Blob([content], {
    type: "text/plain;charset=utf-8"
    });


    return (
        <Container>
           {music.map((currentMusic, index) => <CreateMusic key={index} musicData={currentMusic}/>)}
           <BotaoNovaBatida onClick={handleAddComponent}>NOVA LINHA</BotaoNovaBatida>
           <BotaoEncerrar onClick={() => {saveAs(blob, filename)}}>ENCERRAR</BotaoEncerrar>
        </Container>
    );
}

export default Test;