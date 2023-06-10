import styled from "styled-components";
import { colors } from "../../assets/colors";

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55vw;
  height: fit-content;
  border-radius: 20px;
  padding: 30px;
  border: 2.5px solid ${colors.lightBlue};
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;
`;

export const RankingTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  font-family: "DM Sans", sans-serif;
  padding: 5px;
  > h1 {
    font-size: 55px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${colors.darkBlue};
    -webkit-text-stroke: 1.5px ${colors.darkBlue};
  }
  > svg {
    font-size: 50px;
    color: yellow;
  }
`;

export const RankingHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  > .subtitle {
    h2 {
      font-size: 20px;
      font-weight: 700;
      color: ${colors.darkBlue};
    }
  }
`;

export const PodiumContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Podium = styled.div`
  width: 28%;
  padding: 1.25em;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: ${colors.lightBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .header {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 700;
    text-align: center;
    width: 100%;
      position: relative;
    > img {
      width: 2.3em;
    }
  }
  > h2 {
    color: ${colors.lightGrey};
    font-size: 13px;
    font-weight: 700;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.8em;
    margin-bottom: 0.8em;

    filter: drop-shadow(0px 0px 1px ${colors.lightGrey});
  }
`;

export const ViewsCount = styled.div`
  background-color: ${colors.lightGrey};
  width: 130px;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  position: relative;
  margin: 0 auto;
  > svg {
    position: absolute;
    left: -8px;
    transform: scaleX(-1);
    bottom: -8px;
    font-size: 18px;
  }
`;

export const TwoLeftContainer = styled.div`
  width: 80%;
  height: fit-content;
  margin-top: 5px;
`;

export const RankingLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 18px;
  background-color: ${colors.mediumBlue};
  border-radius: 10px;
  padding: 9px;
  font-weight: 500;
  .place {
    background-color: ${(p) => (p.place == 0 ? "orange" : "red")};
    padding: 5px;
    border-radius: 7px;
    margin-right: 10px;
    color: white;
    font-weight: 700;
  }
  .views {
    font-size: 13px;
    margin: initial;
  }
  > h2 {
    font-weight: 700;
  }
  > h3 {
    color: ${colors.lightGrey};
    font-size: 13px;
    font-weight: 700;

    filter: drop-shadow(0px 0px 1px ${colors.lightGrey});
  }
`;
