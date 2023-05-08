import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../assets/colors";
export default function Header() {
  return (
    <HeaderContainer>
      <Button fontColor="black" backgroundColor="white">
        About
      </Button>
      <Button fontColor="white" backgroundColor={colors.lightBlue}>
        Get Started
      </Button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 174px;
  height: 45px;
  background-color: ${p => p.backgroundColor};
  color: ${p => p.fontColor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-family: "DM Sans", sans-serif;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
`;