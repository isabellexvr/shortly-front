import useAsync from "../useAsync.js";
import rankingApi from "../../api/rankingApi/index.js";

export default function useGetRanking() {
  const {
    data: getRankingData,
    loading: getRankingLoading,
    error: getRankingError,
    connect: getRanking,
  } = useAsync(() => rankingApi(), false);

  return {
    getRankingData,
    getRankingLoading,
    getRankingError,
    getRanking,
  };
}
