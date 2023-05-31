import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, Form } from "../styles";
import Input from "../../components/Input";
import { colors } from "../../assets/colors";
import { ImAttachment } from "react-icons/im";
import { IconContext } from "react-icons/lib";

export default function HomePage() {
  const [url, setUrl] = useState("");

  function sendShorten(e) {
    e.preventDefault();
    console.log(isValidHttpUrl(url));
  }

  function isValidHttpUrl(string) {
    try {
      const newUrl = new URL(`http://${string}`);
      return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (error) {
      return false;
    }
  }
  return (
    <>
      <ShortenForm onSubmit={sendShorten}>
        <ShortenInput>
          <input
            required
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
          />

          <label className="title" htmlFor="url">
            {" "}
            Links que cabem no bolso
          </label>
          <IconLabel>

              <ImAttachment />

          </IconLabel>
        </ShortenInput>
        <ShortenButton type="submit">Encurtar Link</ShortenButton>
      </ShortenForm>
    </>
  );
}

const ShortenForm = styled.form`
  display: flex;
`;

const ShortenInput = styled.div`
  position: relative;
  font-family: "DM Sans", sans-serif;
  margin-bottom: 20px;
  font-weight: 500;
  height: fit-content;
  box-sizing: border-box;
  margin-right: 35px;
  > .title {
    position: absolute;
    left: 36px;
    bottom: 18px;
    color: "#4e8591";
    opacity: 0.5;
    cursor: text;
    font-size: 20px;
    transition: 0.4s ease-in-out;
  }
  > input {
    all: unset;
    border-bottom: 2px solid white;
    outline: 0;
    padding-left: 38px;
    font-size: 20px;
    width: 40vw;
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
      color: ${colors.darkBlue};
      transform: translateY(-39px);
      font-size: 15px;
    }
  }
`;

const ShortenButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 174px;
  height: 50px;
  background-color: ${colors.darkBlue};
  color: white;
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
  :disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

const IconLabel = styled.label`
  position: absolute;
  left: 13px;
  bottom: 18px;
  color: ${colors.lightBlue};
`;
