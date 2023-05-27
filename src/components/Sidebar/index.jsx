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
import { useLocation } from "react-router-dom";
import { FaUserPlus, FaUserCheck } from "react-icons/fa";
import { RiTrophyFill } from "react-icons/ri";
import Icon from "./Icon";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(null);
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
              name="Ranking"
              ReactIcon={RiTrophyFill}
              isSidebarOpened={false}
            />
            <Icon
              route={location.pathname}
              name="Login"
              ReactIcon={FaUserCheck}
              isSidebarOpened={false}
            />
            <Icon
              route={location.pathname}
              name="Cadastro"
              ReactIcon={FaUserPlus}
              isSidebarOpened={false}
            />
          </Icons>

          <div className="logout">
          <Icon
              route={"logout-method"}
              name="Cadastro"
              ReactIcon={IoIosExit}
              isSidebarOpened={false}
            />
          </div>
        </CompressedSidebar>
      )}
      {showSidebar && (
        <ExpandedSidebar>
          <div className="header" onClick={() => setShowSidebar(!showSidebar)}>
            <LogoFull src={logoFull} />
          </div>
          <Icons>
            <Icon
              route={location.pathname}
              name="Ranking"
              ReactIcon={RiTrophyFill}
              isSidebarOpened={true}
            />
            <Icon
              route={location.pathname}
              name="Login"
              ReactIcon={FaUserCheck}
              isSidebarOpened={true}
            />
            <Icon
              route={location.pathname}
              name="Cadastro"
              ReactIcon={FaUserPlus}
              isSidebarOpened={true}
            />
          </Icons>
          <div className="logout">
          <Icon
              route={"logout-method"}
              name="Logout"
              ReactIcon={IoIosExit}
              isSidebarOpened={true}
            />
          </div>
        </ExpandedSidebar>
      )}
    </>
  );
}
