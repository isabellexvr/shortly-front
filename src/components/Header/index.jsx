import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import useToken from "../../services/hooks/useToken";
import jwt_decode from "jwt-decode";

export default function Header() {
  const navigate = useNavigate();
  const token = useToken();
  function handleUserName(token) {
    const userInfo = jwt_decode(token);
    return userInfo.name;
  }

  return (
    <>
      {token && (
        <HeaderContainer>
          <Presentation>
            Seja bem vindo(a), <strong>{handleUserName(token)}</strong>
          </Presentation>
        </HeaderContainer>
      )}
      {!token && (
        <>
          <HeaderContainer>
            <Button fontColor="black" backgroundColor="white">
              Sobre
            </Button>
            <Button
              fontColor="white"
              backgroundColor={colors.lightBlue}
              onClick={() => navigate("/sign-up")}
            >
              Comece aqui
            </Button>
          </HeaderContainer>
        </>
      )}
    </>
  );
}

const HeaderContainer = styled.div`
  @media (max-width: 500px) {
    background-color: ${colors.darkBlue};
    height: 60px;
  }
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

const Presentation = styled.h1`
  @media (max-width: 500px) {
    color: white;
  }
  font-size: clamp(13px, 1rem, 20px);
  font-weight: 700;
  color: ${colors.darkBlue};
  margin-right: 20px;
  > strong {
    color: ${colors.lightBlue};
  }
`;

export const Button = styled.button`
  @media (max-width: 500px) {
    height: 40px;
    width: 90px;
    font-size: 12px;
  }
  all: unset;
  cursor: pointer;
  width: clamp(100px, 24vw, 160px);
  height: 45px;
  background-color: ${(p) => p.backgroundColor};
  color: ${(p) => p.fontColor};
  border-radius: clamp(11px, 1vw, 15px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  margin-left: 10px;
  font-weight: 700;
  font-size: clamp(13px, 5vw, 18px);
  line-height: 25px;
  text-align: center;
  :disabled {
    opacity: 0.7;
    cursor: default;
  }
`;
