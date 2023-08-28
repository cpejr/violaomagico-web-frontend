import React, { useState, useMemo, useEffect } from "react";
import {
  Modal,
  Batidas,
  Music,
  Paginao,
  Tab,
  ValorBatidaText,
  DivBotoesBatida,
  BotaoSalvar,
  BotaoDeletar,
  SelectBatida,
  CompassChange,
  StyledMatrixButton,
  ButtonMatrixContainer,
} from "./Styles";
import Plus from "../../assets/Plus.png";
import styled from "styled-components";
import Button from "../../styles/Button";
import { saveAs } from "file-saver";
import { Colors } from "../../styles/variables";
import BpmChange from "../../components/BpmChange/BpmChange";
import TitleChange from "../../components/TitleChange/TitleChange";
import AuthorChange from "../../components/AuthorChange/AuthorChange";
import CreateMusicColcheia34 from "../../components/CreateMusicColcheia34/CreateMusicColcheia34";
import CreateMusicColcheia from "../../components/CreateMusicColcheia/CreateMusicColcheia";

function CreateMusic() {
  const [selectedBatida, setSelectedBatida] = useState("Batida 1");
  const [salvarLabel, setSalvarLabel] = useState("Salvar Batida 1");
  const [deletarLabel, setDeletarLabel] = useState("Deletar Batida 1");

  const [batida1, setBatida1] = useState();
  const [batida2, setBatida2] = useState();
  const [batida3, setBatida3] = useState();

  const [selectedButtons, setSelectedButtons] = useState({});

  const handleButtonMatrixClick = (buttonId) => {
    setSelectedButtons((prevSelectedButtons) => ({
      ...prevSelectedButtons,
      [buttonId]: !prevSelectedButtons[buttonId],
    }));
  };

  const handleSalvarBatida = () => {
    if (selectedBatida === "Batida 1") {
      setBatida1("< A B C D E >");
    } else if (selectedBatida === "Batida 2") {
      setBatida2("< F G H I J >");
    } else if (selectedBatida === "Batida 3") {
      setBatida3("< K L M N O >");
    }
  };

  const handleDeletarBatida = () => {
    if (selectedBatida === "Batida 1") {
      setBatida1(" ");
    } else if (selectedBatida === "Batida 2") {
      setBatida2(" ");
    } else if (selectedBatida === "Batida 3") {
      setBatida3(" ");
    }
  };

  useEffect(() => {
    updateButtonLabels();
  }, [selectedBatida]);

  const updateButtonLabels = () => {
    const salvarLabel = `Salvar ${selectedBatida}`;
    const deletarLabel = `Deletar ${selectedBatida}`;
    setSalvarLabel(salvarLabel);
    setDeletarLabel(deletarLabel);
  };

  const batidasQuantity = 1;
  const [batidas, setBatidas] = useState(
    Array(batidasQuantity).fill({ isCreated: false })
  );

  const [selectedBatidaIndex, setSelectedBatidaIndex] = useState(null);

  const [compasso, setCompasso] = useState("3/4");
  const [addNewBatidaIndex, setAddNewBatidaIndex] = useState(0);

  const [musicComponents, setMusicComponents] = useState(
    Array(batidasQuantity).fill([
      compasso === "3/4" ? <CreateMusicColcheia34 /> : <CreateMusicColcheia />,
    ])
  );
  useEffect(() => {
    setBatidas(Array(batidasQuantity).fill({ isCreated: false }));
    setMusicComponents(
      Array(batidasQuantity).fill([
        compasso === "3/4" ? (
          <CreateMusicColcheia34 />
        ) : (
          <CreateMusicColcheia />
        ),
      ])
    );
    setAddNewBatidaIndex(0);
    setSelectedBatidaIndex(null);
  }, [compasso]);

  const [batidaNumber, setBatidaNumber] = useState(0);

  // const handleBatidaNumber = (index) => {
  //   setBatidaNumber(index + 1);
  //   if (index === 0) {
  //     newBatida(index);
  //   } else if (index === 1) {
  //     newBatida2(index);
  //   } else if (index === 2) {
  //     newBatida3(index);
  //   }
  // };

  const addMusicComponent = () =>
    setMusicComponents((prevValue) =>
      prevValue.map((batidaMusicComponents, index) =>
        selectedBatidaIndex === index
          ? [...batidaMusicComponents, <CreateMusicColcheia34 />]
          : batidaMusicComponents
      )
    );

  const [titleName, setTitleName] = useState("");
  const [BpmValue, setBpmValue] = useState("");
  const [author, setAuthor] = useState("");

  const handleDownload = () => {
    const blob = new Blob(
      ["V<", titleName, ">", "\nS<", BpmValue, ">", "\nN< ", author, ">"],
      { type: "text/plain;charset=utf-8" }
    );
    saveAs(blob, titleName);
  };

  function newBatida(index) {
    const newBatidas = batidas.map((batida, i) =>
      i === index ? { isCreated: true } : batida
    );
    setBatidas(newBatidas);
    setSelectedBatidaIndex(index);
    setAddNewBatidaIndex(index + 1);
  }

  const hasCreatedBatida = useMemo(
    () => batidas.some(({ isCreated }) => isCreated),
    [batidas]
  );

  const handleSelecionarCompasso = (tipoCompasso) => {
    setCompasso(tipoCompasso);
    setSelectedBatida("Batida 1");
  };

  const selectedMusicComponents = useMemo(() => {
    if (
      selectedBatidaIndex >= 0 &&
      selectedBatidaIndex < musicComponents.length
    ) {
      return musicComponents[selectedBatidaIndex];
    }
    return [];
  }, [selectedBatidaIndex, musicComponents]);

  return (
    <Paginao>
      <Modal>
        <BpmChange BpmValue={BpmValue} setBpmValue={setBpmValue} />
        <TitleChange titleName={titleName} setTitleName={setTitleName} />
        <AuthorChange author={author} setAuthor={setAuthor} />
        {/*<InputComponent />*/}
        <CompassChange>Selecione o tipo de compasso:</CompassChange>
        <ButtonContainer>
          <Button
            onClick={() => handleSelecionarCompasso("3/4")}
            width="70px"
            height="40px"
            fontFamily="Quicksand"
            fontSize="20px"
            backgroundColor="white"
            selected={compasso === "3/4"}
            border="1px solid #000"
            borderRadius="4px"
            fontWeight="bold"
          >
            3/4
          </Button>
          <Button
            width="70px"
            height="40px"
            fontFamily="Quicksand"
            fontSize="20px"
            backgroundColor="white"
            onClick={() => handleSelecionarCompasso("4/4")}
            selected={compasso === "4/4"}
            border="1px solid #000"
            borderRadius="4px"
            fontWeight="bold"
          >
            4/4
          </Button>
        </ButtonContainer>
        <h5 />
      </Modal>

      <Button
        width="200px"
        height="60px"
        fontFamily="Inter"
        fontSize="20px"
        backgroundColor="white"
        onClick={handleDownload}
      >
        Download
      </Button>

      <h6 />

      <Batidas>
        {batidas.map(({ isCreated }, index) => {
          const isAddNewBatida = index === addNewBatidaIndex;
          const isSelected = index === selectedBatidaIndex;

          if (isAddNewBatida) {
            return (
              <AddNewBatidaComponent
                onClick={() => {
                  newBatida(index);
                }}
                // handleBatidaNumber={(index) => handleBatidaNumber(index)}
                index={index} // Passa o índice para o componente
              />
            );
          }

          if (isCreated) {
            return (
              <CreatedBatidaComponent
                backgroundColor={
                  isSelected ? Colors.darkwood : Colors.blackwood
                }
                onClick={() => setSelectedBatidaIndex(index)}
                index={index}
                key={index}
                isSelected={isSelected}
              />
            );
          }

          return <Tab key={index} />;
        })}
      </Batidas>

      <Music>
        {hasCreatedBatida && (
          <>
            <ValorBatidaText>Valor da Batida 1: {batida1}</ValorBatidaText>
            <ValorBatidaText>Valor da Batida 2: {batida2}</ValorBatidaText>
            <ValorBatidaText>Valor da Batida 3: {batida3}</ValorBatidaText>

            <ButtonMatrixContainer>
              {Array.from({ length: 6 }).map((_, row) =>
                Array.from({ length: 24 }).map((_, col) => {
                  const buttonId = row * 24 + col + 1;
                  return (
                    <StyledMatrixButton
                      key={buttonId}
                      id={`button-${buttonId}`}
                      isSelected={selectedButtons[buttonId] || false}
                      onClick={() => handleButtonMatrixClick(buttonId)}
                    >
                      {buttonId}
                    </StyledMatrixButton>
                  );
                })
              )}
            </ButtonMatrixContainer>

            {selectedMusicComponents}

            <DivBotoesBatida>
              <SelectBatida
                id="selectBatida"
                value={selectedBatida}
                onChange={(e) => setSelectedBatida(e.target.value)}
              >
                <option value="Batida 1">Batida 1</option>
                <option value="Batida 2">Batida 2</option>
                <option value="Batida 3">Batida 3</option>
              </SelectBatida>

              <BotaoSalvar
                type="button"
                id="botaoSalvar"
                onClick={handleSalvarBatida}
              >
                {salvarLabel}
              </BotaoSalvar>
              <BotaoDeletar
                type="button"
                id="botaoDeletar"
                onClick={handleDeletarBatida}
              >
                {deletarLabel}
              </BotaoDeletar>
            </DivBotoesBatida>

            <Button
              width="20%"
              backgroundColor="#F4F4F4"
              border="1px solid black"
              color="black"
              fontWeight="700"
              columnGap="10px"
              padding="5px"
              fontSize="14px"
              widthMedia700="20%"
              widthMedia281="60%"
              widthMedia415="40%"
            >
              Resetar
            </Button>
          </>
        )}
      </Music>
    </Paginao>
  );
}
export default CreateMusic;

const CreatedBatidaComponent = ({ onClick, isSelected }) => (
  <Tab
    backgroundColor="{backgroundColor}"
    onClick={onClick}
    color="white"
    fontWeight="700"
    isSelected={isSelected}
  >
    Batida
  </Tab>
);

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Espaçamento entre os botões */
`;

const AddNewBatidaComponent = ({ onClick, handleBatidaNumber, index }) => (
  <Tab selectedBatidaIndex={false}>
    <Button
      onClick={() => {
        onClick();
        handleBatidaNumber(index); // Passa o índice para a função
      }}
      width="60%"
      height="80%"
      backgroundColor="white"
      border="1px solid black"
      color="black"
      fontWeight="700"
      columnGap="10px"
      fontSize="18px"
      fontSizeMedia1080="12px"
      fontSizeMedia950="12px"
      fontFamily="inter"
    >
      <img
        src={Plus}
        className="plus"
        alt="plusSymbol"
        width="15"
        height="15"
      />
      Nova batida
    </Button>
  </Tab>
);
