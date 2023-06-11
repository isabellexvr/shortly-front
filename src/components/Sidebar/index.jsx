import logo from "../../assets/s.png";
import logoFull from "../../assets/logo-full-white.png";
import { IoIosExit } from "react-icons/io";
import {
  Logo,
  CompressedSidebar,
  ExpandedSidebar,
  LogoFull,
  LeftScreen,
} from "./styles";
import Icon from "./Icon";
import useUserInfo from "../../contexts/hooks/useUserInfo";
import UnloggedIcons from "./UnloggedIcons";
import useToken from "../../services/hooks/useToken";
import { useState } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { userInfo, setUserInfo } = useUserInfo();
  const token = useToken();

  return (
    <>
      {!showSidebar && (
        <>
          <CompressedSidebar showSideBar={showSidebar}>
            <div
              className="header"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <Logo src={logo} />
            </div>
            <UnloggedIcons
              isSideBarOpened={showSidebar}
              isLogged={token !== null}
            />

            <div className="logout">
              {token && (
                <Icon
                  route={"logout-method"}
                  name="Logout"
                  ReactIcon={IoIosExit}
                  isSidebarOpened={false}
                  setUserInfo={setUserInfo}
                />
              )}
            </div>
          </CompressedSidebar>
          <LeftScreen isOpened={showSidebar} onClick={() => setShowSidebar(!showSidebar)} />
        </>
      )}
      {showSidebar && (
        <>
          <ExpandedSidebar showSideBar={showSidebar} >
            <div
              className="header"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <LogoFull src={logoFull} />
            </div>
            <UnloggedIcons
              isSideBarOpened={showSidebar}
              isLogged={token !== null}
            />
            <div className="logout">
              {token && (
                <Icon
                  route={"logout-method"}
                  name="Logout"
                  ReactIcon={IoIosExit}
                  isSidebarOpened={false}
                />
              )}
            </div>
          </ExpandedSidebar>
          <LeftScreen isOpened={showSidebar}  onClick={() => setShowSidebar(!showSidebar)} />
        </>
      )}
    </>
  );
}
