import useAsync from "../useAsync.js";
import apiHealth from "../../api/healthApi/healthApi.js";

export default function useGetHealth() {
  const {
    data: getHealthData,
    loading: getHealthLoading,
    error: getHealthError,
    connect: getHealth,
  } = useAsync(() => apiHealth(), false);

  return {
    getHealthData,
    getHealthLoading,
    getHealthError,
    getHealth,
  };
}
