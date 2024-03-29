import {
  Container44,
  ButtonMatrixContainer,
  StyledMatrixButton,
  Letter,
  ContainerLetter,
  ContainerLine,
  BiggerC,
} from "../../pages/CreateMusic/Styles";
import { Line } from "../Column/Styles";

const RowLetters = ["E", "A", "D", "G", "B", "e"];

function Colcheia44({ selectedButtons, handleButtonMatrixClick }) {
  return (
    <Container44>
      <Line />
      <ContainerLetter>
        <Letter>E</Letter>
        <Letter>A</Letter>
        <Letter>D</Letter>
        <Letter>G</Letter>
        <Letter>B</Letter>
        <Letter>e</Letter>
      </ContainerLetter>
      <ButtonMatrixContainer>
        {RowLetters.map((rowLetter, row) =>
          Array.from({ length: 32 }).map((_, col) => {
            const buttonId = row * 32 + col + 1;
            return (
              <StyledMatrixButton
                key={buttonId}
                id={`button-${buttonId}`}
                isSelected={selectedButtons[buttonId] || false}
                onClick={() => handleButtonMatrixClick(buttonId, rowLetter)}
              ></StyledMatrixButton>
            );
          })
        )}
        <BiggerC>
          <ContainerLine>
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
          </ContainerLine>
        </BiggerC>
        <div className="vertical-line-1"></div>
        <div className="vertical-line-2"></div>
        <div className="vertical-line-3"></div>
        <div className="vertical-line-4"></div>
      </ButtonMatrixContainer>
    </Container44>
  );
}

export default Colcheia44;
