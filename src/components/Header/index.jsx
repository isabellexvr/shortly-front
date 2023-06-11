import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import useToken from "../../services/hooks/useToken";
import jwt_decode from "jwt-decode";

export default function Header() {
  const navigate = useNavigate();
  const token = useToken();
  function handleUserName(token){
    const userInfo = jwt_decode(token)
    return userInfo.name
  }
  
  return (
    <>
      {token && <HeaderContainer>
        <Presentation>
          Seja bem vindo(a), <strong>{handleUserName(token)}</strong>
        </Presentation>
        
        </HeaderContainer>}
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
@media(max-width: 1200px) {
    background-color: ${colors.darkBlue};
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
  padding-right: 10px;
  box-sizing: border-box;

`;

const Presentation = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.darkBlue};
  margin-right: 20px;
  >strong{
    color: ${colors.lightBlue};
  }
`


export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: clamp(115px, 12vw, 160px);
  height: 45px;
  background-color: ${(p) => p.backgroundColor};
  color: ${(p) => p.fontColor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  margin-left: 10px;
  font-weight: 700;
  font-size: clamp(12px, 4vw, 18px);
  line-height: 25px;
  :disabled {
    opacity: 0.7;
    cursor: default;
  }
`;
