import styled from "styled-components";
import { colors } from "../../assets/colors.js";
import { FaUserPlus } from "react-icons/fa";
import { Button } from "../../components/Header";

export default function SignUpPage() {
  return (
    <>
      <Title>
        <h1>Sign Up</h1>
        <FaUserPlus />
      </Title>
      <Form>
        <InputContainer>
          <input required type="text" name="" id="name" />
          <label htmlFor="name">Name</label>
        </InputContainer>
        <InputContainer>
          <input required type="text" name="" id="email" />
          <label htmlFor="email">E-mail</label>
        </InputContainer>
        <InputContainer>
          <input required type="text" name="" id="password" />
          <label htmlFor="password">Password</label>
        </InputContainer>
        <InputContainer>
          <input required type="text" name="" id="confirmPassword" />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </InputContainer>
        <Button type="submit" fontColor="white" backgroundColor={colors.lightBlue}>Confirm</Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 33vw;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 75, 95, 0.9);
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  >button{
    margin-top: 15px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  font-family: "DM Sans", sans-serif;
  margin-bottom: 20px;
  > label {
    position: absolute;
    left: 1px;
    bottom: 5px;
    color: white;
    opacity: 0.5;
    cursor: text;
    font-size: 16px;
    transition: 0.5s ease-in-out;
  }
  > input {
    all: unset;
    border-bottom: 2px solid white;
    outline: 0;
    padding: 5px;
    box-sizing: border-box;
    font-size: 16px;
    width: 250px;
    :focus,
    :valid {
      border-bottom: 2px solid ${colors.mediumBlue};
      transition: 0.5s ease-in-out;
    }
    :focus ~ label,
    :valid ~ label {
      color: ${colors.mediumBlue};
      transform: translateY(-24px);
      font-size: 12px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  font-family: "DM Sans", sans-serif;
  padding: 5px;
  > h1 {
    font-size: 55px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${colors.darkBlue};
    -webkit-text-stroke: 1.5px ${colors.darkBlue};
  }
  > svg {
    font-size: 50px;
    color: ${colors.lightBlue};
  }
`;
