import { Icons } from "./styles";
import Icon from "./Icon";
import { RiTrophyFill } from "react-icons/ri";
import { FaUserPlus, FaUserCheck } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export default function UnloggedIcons({ isSideBarOpened, isLogged }) {
    const location = useLocation();

  return (
    <Icons>
      <Icon
        route={location.pathname}
        name="Ranking"
        ReactIcon={RiTrophyFill}
        isSidebarOpened={isSideBarOpened}
      />
      {!isLogged && (
        <>
          <Icon
            route={location.pathname}
            name="Login"
            ReactIcon={FaUserCheck}
            isSidebarOpened={isSideBarOpened}
          />
          <Icon
            route={location.pathname}
            name="Cadastro"
            ReactIcon={FaUserPlus}
            isSidebarOpened={isSideBarOpened}
          />
        </>
      )}
      {isLogged && (
        <>
          <Icon
            route={location.pathname}
            name="Home"
            ReactIcon={IoHome}
            isSidebarOpened={isSideBarOpened}
          />
        </>
      )}
    </Icons>
  );
}
