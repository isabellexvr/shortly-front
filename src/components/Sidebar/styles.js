import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/colors";

export const GrowBackground = keyframes`
  from{
    width: 40px;
  }
  to{
    width: 130px;
  }
`;

const DecreaseBackground = keyframes`
  from{
    width: 130px;
  }
  to{
    width: 40px;
  }
`

const IconTextAppear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

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
        width: 180px;
    };
`;

export const RetractSidebar = keyframes`
    from {width: 180px}
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
    p.showSideBar !== null ? RetractSidebar : "none"} 0.5s linear;
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
  .icon{
    animation: ${DecreaseBackground} 0.5s;
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
  color: white;
`;

export const ExpandedSidebar = styled.div`
z-index 1;
  height: 100vh;
  width: 180px;
  background-color: ${colors.darkBlue};
  position: fixed;
  left: 0;
  top: 0;
  animation: ${(p) =>
    p.showSideBar !== null ? ExpandSidebar : "none"} 0.5s linear;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .header {
    margin-top: 10px;
    animation: ${IconTextAppear} 2s ease-in-out;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .icon{
    animation: ${GrowBackground} 1s;
    >h1{
      animation: ${IconTextAppear} 1.5s ease-in-out;
    }

  }
  .logout{
    margin-bottom: 10px;
    font-size: 23px;
  }
`;
