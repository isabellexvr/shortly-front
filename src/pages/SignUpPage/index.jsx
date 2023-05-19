import styled from "styled-components";
import { colors } from "../../assets/colors.js";
import { FaUserPlus } from "react-icons/fa";
import { Button } from "../../components/Header";
import Input from "../../components/Input/index.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [form, setForm] = useState({});

  const handleForm = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <Title>
        <h1>Sign Up</h1>
        <FaUserPlus />
      </Title>
      <Form>
        <Input
          type={"text"}
          id={"name"}
          htmlFor={"name"}
          handleEvent={handleForm}
        >
          Name
        </Input>
        <Input
          type={"email"}
          id={"email"}
          htmlFor={"email"}
          handleEvent={handleForm}
        >
          E-mail
        </Input>
        <Input
          type={"password"}
          id={"password"}
          htmlFor={"password"}
          handleEvent={handleForm}
        >
          Password
        </Input>
        <Input
          type={"password"}
          id={"confirmPassword"}
          htmlFor={"confirmPassword"}
          handleEvent={handleForm}
        >
          Confirm Password
        </Input>
        <StyledLink to={"/sign-in"}>
          Already registered? Sign in instead!
        </StyledLink>
        <Button
          type="submit"
          fontColor="white"
          backgroundColor={colors.lightBlue}
        >
          Confirm
        </Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 30vw;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 75, 95, 0.9);
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;
  user-select: none;

  > button {
    margin-top: 15px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  font-family: "DM Sans", sans-serif;
  cursor: default;
  user-select: none;
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

const StyledLink = styled(Link)`
  all: unset;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 13px;
  cursor: pointer;
  user-select: none;

`