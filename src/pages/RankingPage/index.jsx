import useGetRanking from "../../services/hooks/api/useGetRanking";
import { useEffect, useState } from "react";
import { RiTrophyFill } from "react-icons/ri";
import handlePodiumIcon from "../helpers/handlePodiumIcon.js";
import { HiCursorClick } from "react-icons/hi";
import {
  RankingContainer,
  RankingHeader,
  PodiumContainer,
  Podium,
  ViewsCount,
  TwoLeftContainer,
  RankingLeft,
  LogosContainer,
} from "./styles";
import bermudaLogo from "../../assets/bermuda.png";
import logoFull from "../../assets/logo-full.png";

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
      <LogosContainer>
        
        <img src={logoFull} />
<img src={bermudaLogo} />

      </LogosContainer>

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
