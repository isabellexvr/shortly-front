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
  > label {
    position: absolute;
    left: 1px;
    bottom: 7px;
    color: white;
    opacity: 0.5;
    cursor: text;
    font-size: 20px;
    transition: 0.5s ease-in-out;
  }
  > input {
    all: unset;
    border-bottom: 2px solid white;
    outline: 0;
    padding: 5px;
    box-sizing: border-box;
    font-size: 20px;
    width: 22vw;
    height: 45px;
    color: white;
    :focus,
    :valid {
      border-bottom: 2px solid ${colors.mediumBlue};
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