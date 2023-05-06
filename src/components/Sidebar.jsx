import styled, { keyframes } from "styled-components";
import { useState } from "react";
import logo from "../assets/s.png";
import { colors } from "../assets/colors";
import {RiTrophyFill} from "react-icons/ri"
import {IoIosExit} from "react-icons/io"

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(null);

  return (
    <>
      {!showSidebar && (
        <CompressedSidebar showSideBar={showSidebar}>
          <div className="header" onClick={() => setShowSidebar(!showSidebar)}>
            <Logo src={logo} />
          </div>
          <div className="icons">
            <RiTrophyFill/>

          </div>
          <div className="logout">
            <IoIosExit/>
          </div>
        </CompressedSidebar>
      )}
      {showSidebar && (
        <ExpandedSidebar>
          <div className="header" onClick={() => setShowSidebar(!showSidebar)}>
            <Logo src={logo} />
            <h1>Shortly</h1>
          </div>
        </ExpandedSidebar>
      )}
    </>
  );
}

const LogoAppear = keyframes`
    from{opacity: 0;}
    to{opacity: 1;}
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  cursor: pointer;
`;

const ExpandSidebar = keyframes`
from {width: 50px}
    to {
        width: 200px;
    };
`;

const RetractSidebar = keyframes`
    from {width: 200px}
    to{width: 60px}
`;

const CompressedSidebar = styled.div`
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
  .icons{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    >svg{
      margin-top: 25px;
      font-size: 23px;
    }
  }
  .logout{
    margin-bottom: 10px;
    font-size: 23px;
  }
`;

const ExpandedSidebar = styled.div`
z-index 1;
  height: 100vh;
  width: 200px;
  background-color: ${colors.darkBlue};
  position: fixed;
  left: 0;
  top: 0;
  animation: ${ExpandSidebar} 1s linear;
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
      font-size: 28px;
      color: ${colors.lightBlue};
    }
  }
`;
