import { colors } from "../assets/colors";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import useGetRanking from "../services/hooks/api/useGetRanking";
import { useEffect, useState } from "react";
import { RiTrophyFill } from "react-icons/ri";
import handlePodiumIcon from "./helpers/handlePodiumIcon.js";

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
                  <ViewsCount>{p.visitCount} Views</ViewsCount>
                </Podium>
              ))}
            </PodiumContainer>
          </RankingContainer>
        </>
      )}
    </>
  );
}

const RankingContainer = styled.div`
  width: 65vw;
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
    margin-bottom: 15px;
    color: ${colors.lightBlue};
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
  font-size: 0.9em;
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  height: 15vw;
  align-items: center;
  background-color: ${colors.lightBlue};
  .header {
    display: flex;
    align-items: center;
    font-weight: 700;
    text-align: center;
    > img {
      width: 2.3em;
      margin-right: 5px;
    }
  }
  > h2 {
    color: ${colors.lightGrey};
    font-size: 13px;
    font-weight: 700;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
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
`;
