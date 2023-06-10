import useAsync from "../../useAsync";
import useToken from "../../useToken.js";
import { usersApi } from "../../../api/usersApi";

export default function useGetUserUrls() {
  const token = useToken();

  const {
    data: getUserUrlsData,
    loading: getUserUrlsLoading,
    error: getUserUrlsError,
    connect: getUserUrls,
  } = useAsync(() => usersApi.userUrls(token), false);

  return {
    getUserUrlsData,
    getUserUrlsLoading,
    getUserUrlsError,
    getUserUrls,
  };
}
