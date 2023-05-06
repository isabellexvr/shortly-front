import { colors } from "../assets/colors";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import useGetRanking from "../services/hooks/api/useGetRanking";
import { useEffect, useState } from "react";

export default function RankingPage() {
  const { getRanking, getRankingLoading, getRankingError } = useGetRanking();
  const [ranking, setRanking] = useState([]);

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
      <Sidebar />
      <Header />
      {getRankingError ? (
        <>um erro ocorreu</>
      ) : getRankingLoading ? (
        <>carregando...</>
      ) : (
        <>ranking!</>
      )}
    </>
  );
}
