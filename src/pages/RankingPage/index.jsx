import useGetRanking from "../../services/hooks/api/ranking/useGetRanking";
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
  RankingTitle,
} from "./styles";
import styled from "styled-components";
import useToken from "../../services/hooks/useToken";
import jwt_decode from "jwt-decode";
import useUserInfo from "../../contexts/hooks/useUserInfo";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function RankingPage() {
  const { getRanking, getRankingLoading, getRankingError } = useGetRanking();
  const [podium, setPodium] = useState([]);
  const [topTwoLeft, setTopTwoLeft] = useState([]);
  const token = useToken();
  const { setUserInfo } = useUserInfo();
  const navigate = useNavigate();

  const getUserId = (token) => {
    const decoded = jwt_decode(token);
    const expiration = new Date(decoded.exp * 1000);
    if (new Date() > expiration) {
      setUserInfo({});
      navigate("/sign-in");
      return;
    }
    return decoded.sub;
  };

  console.log("erro aqui ó: ", getRankingError);

  useEffect(() => {
    async function getApiData() {
      try {
        const ranking = await getRanking();
        const rankingPodium = ranking.slice(0, 3);
        const rankingTwoLeft = ranking.slice(-2);
        setPodium(rankingPodium);
        setTopTwoLeft(rankingTwoLeft);
      } catch (err) {
        toast.error("Ocorreu um erro ao buscar as informações.");
        console.log(err);
      }
    }
    if (podium.length === 0) {
      getApiData();
    }
  }, []);

  return (
    <>
      <Toaster />
      {getRankingError ? (
        <RankingContainer>
          <img src={`https://http.cat/${getRankingError.response.status}`} />
        </RankingContainer>
      ) : (
        <>
          <RankingTitle>
            {getRankingLoading ? (
              <h1>Carregando...</h1>
            ) : (
              <>
                <h1>Ranking</h1>
                <RiTrophyFill />
              </>
            )}
          </RankingTitle>

          <RankingContainer>
            <RankingHeader>
              <div className="subtitle">
                <h2>
                  {getRankingLoading
                    ? "Carregando..."
                    : "Donos das URLs mais clicadas!"}
                </h2>
              </div>
            </RankingHeader>
            <PodiumContainer>
              {!getRankingLoading &&
                podium?.map((p, i) => (
                  <Podium key={i}>
                    <div className="header">
                      <img src={handlePodiumIcon(i)} />
                      <h1>
                        {p.name.length > 10
                          ? p.name.slice(0, 8) + "..."
                          : p.name}
                      </h1>
                      {token ? (
                        getUserId(token) == p.id ? (
                          <Congrats>É você!!!</Congrats>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </div>
                    <h2>{p.linksCount} URLs</h2>
                    <ViewsCount width={"90%"}>
                      <HiCursorClick />
                      {p.visitsCount} Cliques
                    </ViewsCount>
                  </Podium>
                ))}
            </PodiumContainer>
            <TwoLeftContainer>
              {!getRankingLoading &&
                topTwoLeft?.map((l, i) => (
                  <RankingLeft place={i} key={i}>
                    <div className="place">
                      <h1>{i == 0 ? "4th" : "5th"}</h1>
                    </div>
                    <h2>{l.name}</h2>
                    <h3>{l.linksCount} URLs</h3>
                    <ViewsCount width={"130px"} className="views">
                      <HiCursorClick />
                      {l.visitsCount} Views
                    </ViewsCount >
                  </RankingLeft>
                ))}
            </TwoLeftContainer>
          </RankingContainer>
        </>
      )}
    </>
  );
}

const Congrats = styled.div`
  position: absolute;
  top: -8px;
  font-size: 12px;
  color: yellow;
  right: 22px;
`;
