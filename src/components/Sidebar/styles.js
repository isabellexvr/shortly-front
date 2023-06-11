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
`;

const IconTextAppear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
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
  from {
    
    width: 50px
  }
  to {
        width: 12vw;
  };
`;

const ExpandMobileSidebar = keyframes`
    from {
    
    width: 1px
  }
  to {
        width: 160px;
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
    !p.showSideBar ? RetractSidebar : "none"} 0.3s linear;
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
    animation: ${(p) =>
      p.isSideBarOpened ? DecreaseBackground : "none"} 0.5s;
  }
  .logout{
    margin-bottom: 20px;
    font-size: 30px;
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
  @media(max-width: 1200px) {
    animation: ${(p) =>
      p.showSideBar ? ExpandMobileSidebar : "none"} 0.3s linear;
    width: 160px
  }
z-index 1;
  height: 100vh;
  width: 12vw;
  background-color: ${colors.darkBlue};
  position: fixed;
  left: 0;
  top: 0;

  animation: ${(p) =>
    p.showSideBar ? ExpandSidebar : "none"} 0.3s linear;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .header {
    margin-top: 10px;
    animation: ${IconTextAppear} 1.5s ease-in-out;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .icon{
    animation: ${GrowBackground} 0.5s;
    >h1{
      animation: ${IconTextAppear} 1s ease-in-out;
    }

  }
    .logout{
    margin-bottom: 20px;
    font-size: 30px;
  }

`;

const DarkenScreen = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 0.7;
  }
`;

const BrithenScreen = keyframes`
  from{
    display: initial;
    opacity: 0.7;

  }
  to{
    opacity: 0;
    display: none;
  }
`

export const LeftScreen = styled.div`
  @media (max-width: 1200px) {
    width: calc(100vw - 160px);
  }
  animation: ${p => p.isOpened ? DarkenScreen : BrithenScreen} 0.5s ease-in-out;
  position: fixed;
  cursor: pointer;
  background-color: black;
  opacity: 0.7;
  width: 88vw;
  height: 100vh;
  right: 0;
  top: 0;
  z-index: 2;
  display: ${(p) => (p.isOpened ? "" : "none")};
  transition-property: display;
  transition-duration: 1s;
  transition-delay: 2s;
  
`;
