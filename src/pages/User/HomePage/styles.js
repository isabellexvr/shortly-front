import { colors } from "../../../assets/colors";
import styled from "styled-components";

export const Title = styled.h1`
  @media (max-width: 1000px) {
    
  }
  font-size: 22px;
  font-weight: 700;
  color: ${colors.darkBlue};
  margin-bottom: 30px;
`;

export const ShortenButton = styled.button`
  @media (max-width: 1000px) {
    width: 100px;
    height: 45px;
    margin-bottom: 10px;
  }
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

export const CleanButton = styled.button`
  @media (max-width: 1000px) {
    width: 100px;
    height: 45px;
  }
  all: unset;
  cursor: pointer;
  width: 174px;
  height: 55px;
  background-color: ${colors.lightBlue};
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
  @media (max-width: 1000px) {
    height: 70vw;
  }
  margin-top: 20px;
  width: 75vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-right: 3px;
  overflow: scroll;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 3px;
    height: 80px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.mediumBlue};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.darkBlue};
  }
`;

export const UrlInfo = styled.div`
  @media (max-width: 800px) {
    flex-direction: column;
    height: 80px;
    padding: 7px;
    box-sizing: border-box;
  }
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
  > a,
  h1 {
    @media (max-width: 1000px) {
      width: 100%;
    }
    width: 33%;
    display: flex;
    justify-content: center;
  }
  > h1 {
    font-weight: 500;
  }
`;

export const DeleteButton = styled.button`
  @media (max-width: 800px) {
    height: 80px;
    width: 15%;
  }
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
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
  .buttons {
    @media (max-width: 1000px) {
      display: flex;
    }
    display: flex;
  }
  display: flex;
  height: fit-content;
  width: 75vw;
  justify-content: space-between;
`;

export const ShortenInput = styled.div`
  @media (max-width: 1000px) {
    width: 90%;
  }
  position: relative;
  margin-bottom: 10px;
  font-weight: 500;
  height: fit-content;
  box-sizing: border-box;
  margin-right: 25px;
  width: 80%;
  > .title {
    @media (max-width: 1000px) {
      font-size: 17px;
    }
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
  height: fit-content;
  padding-left: 40px;
  margin-bottom: 25px;
`;
