import styled from "styled-components";
import { useState } from "react";
export default function Header() {

  return (
    <HeaderContainer>

    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
