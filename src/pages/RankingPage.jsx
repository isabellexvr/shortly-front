import { colors } from "../assets/colors";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import useGetRanking from "../services/hooks/api/useGetRanking";
import { useEffect, useState } from "react";
import { RiTrophyFill } from "react-icons/ri";
import handlePodiumIcon from "./helpers/handlePodiumIcon.js";
import { HiCursorClick } from "react-icons/hi";

const MOCKEDPODIUM = [
  {
    id: 3,
    name: "Fulano Cicrano",
    linksCount: "108",
    visitCount: "1.7Mi",
  },
  {
    id: 33,
    name: "Aninha",
    linksCount: "421",
    visitCount: "1.3Mi",
  },
  {
    id: 63,
    name: "Corno Manso",
    linksCount: "349",
    visitCount: "900k",
  },
];

const MOCKEDLEFT = [
  {
    id: 50,
    name: "O Outro",
    linksCount: "5",
    visitCount: "850k",
  },
  {
    id: 8,
    name: "Delícia",
    linksCount: "51",
    visitCount: "821k",
  },
];
export default function RankingPage() {
  const { getRanking, getRankingLoading, getRankingError } = useGetRanking();
  const [ranking, setRanking] = useState([]);
  const [podium, setPodium] = useState([]);
  const [topTwoLeft, setTopTwoLeft] = useState([]);

  useEffect(() => {
    async function getApiData() {
      try {
        const ranking = await getRanking();
        console.log(ranking);
      } catch (err) {
        console.log(err);
      }
    }
    getApiData();
  }, []);

  return (
    <>
      {getRankingError ? (
        <>um erro ocorreu</>
      ) : getRankingLoading ? (
        <>carregando...</>
      ) : (
        <>
          <RankingContainer>
            <RankingHeader>
              <div className="title">
                <RiTrophyFill />
                <h1>Ranking</h1>
              </div>
              <div className="subtitle">
                <h2>Top Most Clicked Shortened URLs Owners</h2>
              </div>
            </RankingHeader>
            <PodiumContainer>
              {MOCKEDPODIUM.map((p, i) => (
                <Podium key={i}>
                  <div className="header">
                    <img src={handlePodiumIcon(i)} />
                    <h1>{p.name}</h1>
                  </div>
                  <h2>{p.linksCount} URLs</h2>
                  <ViewsCount>
                    <HiCursorClick />
                    {p.visitCount} Views
                  </ViewsCount>
                </Podium>
              ))}
            </PodiumContainer>
            <TwoLeftContainer>
              {MOCKEDLEFT.map((l, i) => (
                <RankingLeft place={i} key={i}>
                  <div className="place">
                    <h1>{i == 0 ? "4th" : "5th"}</h1>
                  </div>
                  <h2>{l.name}</h2>
                  <h3>{l.linksCount} URLs</h3>
                  <ViewsCount className="views">
                    <HiCursorClick />
                    {l.visitCount} Views
                  </ViewsCount>
                </RankingLeft>
              ))}
            </TwoLeftContainer>
          </RankingContainer>
        </>
      )}
    </>
  );
}

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55vw;
  height: fit-content;
  background-color: ${colors.darkBlue};
  border-radius: 20px;
  padding: 30px;
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;
`;

const RankingHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  > .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 43px;
    font-weight: 700;
    height: fit-content;
    margin-bottom: 10px;
    color: ${colors.darkBlue};
    > h1 {
      cursor: pointer;
      -webkit-text-stroke: 2px ${colors.lightBlue};
      :hover {
        color: yellow;
        transition: all 0.7s ease;
      }
    }
    > svg {
      font-size: 50px;
      margin-right: 10px;
      color: yellow;
    }
  }
  > .subtitle {
    h2 {
      font-size: 17px;
      font-weight: 500;
      color: ${colors.lightGrey};
    }
  }
`;

const PodiumContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Podium = styled.div`
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
    justify-content: space-between;
    font-weight: 700;
    text-align: center;
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

const ViewsCount = styled.div`
  background-color: ${colors.lightGrey};
  width: 6.7em;
  height: 1.6em;
  border-radius: 1vw;
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

const TwoLeftContainer = styled.div`
  margin-top: 15px;
  width: 75%;
  height: fit-content;
`;

const RankingLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  background-color: ${colors.mediumBlue};
  border-radius: 10px;
  padding: 9px;
  font-weight: 500;
  .place {
    background-color: ${(p) => (p.place == 0 ? "orange" : "red")};
    padding: 5px;
    border-radius: 7px;
    margin-right: 10px;
  }
  .views {
    font-size: 13px;
    margin: initial;
  }
  > h2 {
    font-weight: 700;
  }
  >h3{
    color: ${colors.lightGrey};
    font-size: 13px;
    font-weight: 700;

    filter: drop-shadow(0px 0px 1px ${colors.lightGrey});
  }
`;
