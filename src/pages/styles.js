import { colors } from "../assets/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  width: 30vw;
  margin-top: 15px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;
  user-select: none;
  border: 2.5px solid ${colors.lightBlue};
  > button {
    margin-top: 15px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  font-family: "DM Sans", sans-serif;
  cursor: default;
  user-select: none;  
  > h1 {
    font-size: 55px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${colors.darkBlue};
    -webkit-text-stroke: 1.5px ${colors.darkBlue};
  }
  > svg {
    font-size: 55px;
    margin-bottom: 10px;
    color: ${colors.lightBlue};
  }
`;

export const StyledLink = styled(Link)`
  all: unset;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${colors.darkBlue};
  padding: 10px;
  cursor: pointer;
  user-select: none;
  width: 21vw;
  text-align: center;
  line-height: 18px;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 174px;
  height: 45px;
  background-color: ${colors.lightBlue};
  color: ${p => p.fontColor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-family: "DM Sans", sans-serif;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  :disabled{
    opacity: 0.7;
    cursor: default;
  }
`;