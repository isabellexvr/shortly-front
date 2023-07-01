import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { colors } from "../../assets/colors.js";
import { createPortal } from "react-dom";

export default function ConfirmationModal({
  message,
  confirmButton,
  setModal,
  confirmationFunction,
  urlForDeleting,
}) {
  const modal = document.getElementById("modal");

  return createPortal(
    <>
      <ModalBackground onClick={() => setModal(false)} />
      <ModalContainer>
        <ModalHeader>
          <AiFillCloseCircle onClick={() => setModal(false)} />
        </ModalHeader>
        <h1>{message}</h1>
        <ButtonsContainer>
          <button
            color={colors.lightBlue}
            onClick={() => {
              confirmationFunction(urlForDeleting);
            }}
          >
            {confirmButton}
          </button>
          <button color="white" onClick={() => setModal(false)}>
            Cancelar
          </button>
        </ButtonsContainer>
      </ModalContainer>
    </>,
    modal
  );
}

const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: black;
  opacity: 0.5;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 2;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  height: clamp(230px, 30vw, 400px);
  width: clamp(250px, 40vw, 400px);
  background-color: white;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > h1 {
    font-weight: 600;
    color: ${colors.lightBlue};
    font-size: 20px;
    text-align: center;
    height: 50%;
    width: 80%;
  }
`;

const ModalHeader = styled.div`
  height: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;
  > svg {
    font-size: 27px;
    color: red;
    cursor: pointer;

  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  > button {
    all: unset;
    width: 42%;
    height: clamp(40px, 60%, 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    font-weight: 700;
    font-size: clamp(13px, 1.2vw, 17px);
    cursor: pointer;

  }
  > button:first-child {
    background-color: ${colors.lightBlue};
    color: white;
  }
  > button:last-child {
    background-color: white;
    color: black;
  }
`;
