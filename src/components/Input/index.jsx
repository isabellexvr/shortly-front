import styled from "styled-components";
import { colors } from "../../assets/colors";

export default function Input({type, id, htmlFor, name, handleEvent, children}){
    return (
        <InputContainer>
          <input required type={type} name={name} id={id} onChange={handleEvent} />
          <label htmlFor={htmlFor}>{children}</label>
        </InputContainer>
    )
}

const InputContainer = styled.div`
  position: relative;
  font-family: "DM Sans", sans-serif;
  margin-bottom: 20px;
  font-weight: 500;
  height: fit-content;
  box-sizing: border-box;
  > label {
    position: absolute;
    left: 10px;
    bottom: 18px;
    color: "#4e8591";
    opacity: 0.5;
    cursor: text;
    font-size: 20px;
    transition: 0.5s ease-in-out;
  }
  > input {
    all: unset;
    border-bottom: 2px solid white;
    outline: 0;
    padding-left: 12px;
    font-size: clamp(12px, 10vw, 20px);
    width: clamp(210px, 25vw, 350px);
    height: 45px;
    color: ${colors.darkBlue};
    background-color: ${colors.lightGrey};
    border-radius: 11px;
    height: 55px;
    box-sizing: border-box;
    :focus,
    :valid {
      border-bottom: 4px solid ${colors.mediumBlue};
      transition: 0.5s ease-in-out;
    }
    :focus ~ label,
    :valid ~ label {
      color: ${colors.mediumBlue};
      transform: translateY(-37px);
      font-size: 12px;
    }
  }
`;