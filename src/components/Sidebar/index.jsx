import { useState } from "react";
import logo from "../../assets/s.png";
import logoFull from "../../assets/logo-full-white.png";
import { IoIosExit } from "react-icons/io";
import {
  Logo,
  CompressedSidebar,
  ExpandedSidebar,
  LogoFull,
  Icons,
} from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUserPlus, FaUserCheck } from "react-icons/fa";
import { RiTrophyFill } from "react-icons/ri";
import Icon from "./Icon";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {!showSidebar && (
        <CompressedSidebar showSideBar={showSidebar}>
          <div className="header" onClick={() => setShowSidebar(!showSidebar)}>
            <Logo src={logo} />
          </div>
          <Icons>
            <Icon
              route={location.pathname}
              name="trophy"
              ReactIcon={RiTrophyFill}
            />
            <Icon
              route={location.pathname}
              name="sign-in"
              ReactIcon={FaUserCheck}
            />
            <Icon
              route={location.pathname}
              name="sign-up"
              ReactIcon={FaUserPlus}
            />
          </Icons>

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
