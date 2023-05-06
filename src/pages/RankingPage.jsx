import { colors } from "../assets/colors";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import useGetHealth from "../services/hooks/api/useGetHealth";
import { useEffect } from "react";

export default function RankingPage() {
  const { getHealth } = useGetHealth();
  useEffect(() => {
    async function getApiData() {
      try {
        const health = await getHealth();
        console.log(health);
      } catch (err) {
        console.log(err);
      }
    }
    getApiData()
  }, []);
  return (
    <>
      <Sidebar />
      <Header />
    </>
  );
}
