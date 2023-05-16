import { useState } from "react";
import logo from "../../assets/s.png";
import logoFull from "../../assets/logo-full-white.png";
import { RiTrophyFill } from "react-icons/ri";
import { IoIosExit } from "react-icons/io";
import { Logo, CompressedSidebar, ExpandedSidebar, LogoFull } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(null);
  const navigate= useNavigate()

  return (
    <>
      {!showSidebar && (
        <CompressedSidebar showSideBar={showSidebar}>
          <div className="header" onClick={() => setShowSidebar(!showSidebar)}>
            <Logo src={logo} />
          </div>
          <div className="icons">
            <RiTrophyFill onClick={() => navigate("/")} />
          </div>
          <div className="logout">
            <IoIosExit />
          </div>
        </CompressedSidebar>
      )}
      {showSidebar && (
        <ExpandedSidebar>
          <div className="header" onClick={() => setShowSidebar(!showSidebar)}>
            <LogoFull src={logoFull} />
          </div>
        </ExpandedSidebar>
      )}
    </>
  );
}
