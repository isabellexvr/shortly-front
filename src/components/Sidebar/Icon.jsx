import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colors } from "../../assets/colors";

export default function Icon({
  route,
  name,
  ReactIcon,
  isSidebarOpened,
  setUserInfo,
}) {
  const navigate = useNavigate();
  return (
    <IconStyle
      className="icon"
      onClick={() => {
        if (route === "logout-method") {
          localStorage.removeItem("userData");
          setUserInfo({})
          navigate("/sign-in");
        }
        navigate(handleRoute(`${name}`));
      }}
      isSelected={route === handleRoute(name)}
      isSidebarOpened={isSidebarOpened}
    >
      <ReactIcon />
      {isSidebarOpened && <h1>{name}</h1>}
    </IconStyle>
  );
}

const IconStyle = styled.div`
  > svg {
    font-size: 23px;
    padding: 7px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
  }
  background-color: ${(p) => (p.isSelected ? colors.lightBlue : "none")};
  pointer-events: ${(p) => (p.isSelected ? "none" : "initial")};
  width: ${(p) => (p.isSidebarOpened ? "130px" : "fit-content")};
  font-family: "DM Sans", sans-serif;
  border-radius: 5px;
  height: fit-content;
  margin-top: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: ${colors.mediumBlue};
  }
  > h1 {
    font-size: 17px;
    padding-right: 5px;
    margin-left: 2px;
    font-weight: 700;
  }
`;

const handleRoute = (icon) => {
  switch (icon) {
    case "Ranking":
      return "/ranking";
    case "Login":
      return "/sign-in";
    case "Cadastro":
      return "/sign-up";
    case "Home":
      return "/user/home";
  }
};
