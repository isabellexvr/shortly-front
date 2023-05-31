import useUserInfo from "../../contexts/hooks/useUserInfo";

export default function useToken() {
  const { userInfo } = useUserInfo();

  return userInfo.token;
}
