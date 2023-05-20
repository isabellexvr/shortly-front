import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colors } from "../../assets/colors";

export default function Icon({ route, name, ReactIcon }) {
  const navigate = useNavigate();

  return (
    <IconStyle isSelected={route === handleRoute(name)}>
      <ReactIcon
        onClick={() => {
          navigate(handleRoute(`${name}`));
        }}
      />
    </IconStyle>
  );
}

const IconStyle = styled.div`
  > svg {
    font-size: 23px;
    cursor: pointer;
    padding: 7px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    :hover {
      background-color: ${colors.mediumBlue};
    }
  }
  background-color: ${(p) => (p.isSelected ? colors.lightBlue : "none")};
  pointer-events:${(p) => (p.isSelected ? "none" : "initial")};
  border-radius: 5px;
  height: fit-content;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const handleRoute = (icon) => {
  switch (icon) {
    case "trophy":
      return "/";
    case "sign-in":
      return "/sign-in";
    case "sign-up":
      return "/sign-up";
  }
};
