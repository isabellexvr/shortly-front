import { colors } from "../../../assets/colors";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.darkBlue};
  margin-bottom: 15px;

`

export const ShortenButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 174px;
  height: 55px;
  background-color: ${colors.darkBlue};
  color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-family: "DM Sans", sans-serif;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  :disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

export const IconLabel = styled.label`
  position: absolute;
  left: 13px;
  bottom: 18px;
  color: ${colors.lightBlue};

`;

export const UrlsContainer = styled.div`
  margin-top: 20px;
  width: 58.05vw;
  height: 50px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const UrlInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.darkBlue};
  height: 50px;
  margin-bottom: 10px;
  width: 90%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 15px;
  font-family: "DM Sans", sans-serif;
  > a {
    all: unset;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 700;
    color: ${colors.lightBlue};
  }
  >a,h1{
    width: 33%;
    display: flex;
    justify-content: center;
  }
  >h1{
    font-weight: 500;
  }
`;

export const DeleteButton = styled.button`
  all: unset;
  background-color: ${colors.lightBlue};
  width: 10%;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
`;

export const UrlContainer = styled.div`
  display: flex;
`;

export const ShortenForm = styled.form`
  display: flex;
  height: fit-content;
  width: 58.05vw;
  justify-content: space-between;
`;

export const ShortenInput = styled.div`
  position: relative;
  margin-bottom: 10px;
  font-weight: 500;
  height: fit-content;
  box-sizing: border-box;
  margin-right: 25px;
  width: 80%;
  > .title {
    position: absolute;
    left: 45px;
    bottom: 18px;
    color: "#4e8591";
    opacity: 0.5;
    cursor: text;
    font-size: 20px;
    transition: 0.25s ease-in-out;
  }
  > input {
    all: unset;
    border-bottom: 2px solid white;
    outline: 0;
    padding-left: 38px;
    font-size: 20px;
    width: 100%;
    height: 45px;
    color: ${colors.darkBlue};
    background-color: ${colors.lightGrey};
    border-radius: 11px;
    height: 55px;
    box-sizing: border-box;
    :focus,
    :valid {
      border-bottom: 4px solid ${colors.mediumBlue};
      transition: 0.5s ease-in-out;
    }
    :focus ~ .title,
    :valid ~ .title {
      color: ${colors.lightBlue};
      transform: translateY(-39px);
      font-size: 15px;
    }
  }
`;

export const SectionContainer = styled.section`

`