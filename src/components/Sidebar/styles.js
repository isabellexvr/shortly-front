import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/colors";
import { RiTrophyFill } from "react-icons/ri";

export const LogoAppear = keyframes`
    from{opacity: 0;}
    to{opacity: 1;}
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  cursor: pointer;
`;

export const LogoFull = styled.img`
  cursor: pointer;
  padding: 10px;
  width: 140px;
`;

export const ExpandSidebar = keyframes`
from {width: 50px}
    to {
        width: 200px;
    };
`;

export const RetractSidebar = keyframes`
    from {width: 200px}
    to{width: 60px}
`;

export const CompressedSidebar = styled.div`
z-index 1;
  height: 100vh;
  width: 60px;
  background-color: ${colors.darkBlue};
  position: fixed;
  left: 0;
  top: 0;
  animation: ${(p) =>
    p.showSideBar !== null ? RetractSidebar : "none"} 1s linear;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .header {
    margin-top: 10px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .logout{
    margin-bottom: 10px;
    font-size: 23px;
  }
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

export const ExpandedSidebar = styled.div`
z-index 1;
  height: 100vh;
  width: 200px;
  background-color: ${colors.darkBlue};
  position: fixed;
  left: 0;
  top: 0;
  animation: ${ExpandSidebar} 1s linear;
  font-family: "DM Sans", sans-serif;
  .header {
    margin-top: 10px;
    animation: ${LogoAppear} 5s ease-in-out;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    > h1 {
      cursor: pointer;
      font-size: 32px;
      color: ${colors.lightBlue};
      font-weight: 700;
    }
  }
`;
