import { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import useUserInfo from "../../../contexts/hooks/useUserInfo";
import useGetUserUrls from "../../../services/hooks/api/useGetUserUrls";
import { RiDeleteBin6Line } from "react-icons/ri";
import { isValidHttpUrl } from "./helpers";
import {
  Title,
  ShortenButton,
  IconLabel,
  UrlsContainer,
  UrlInfo,
  DeleteButton,
  UrlContainer,
  ShortenInput,
  ShortenForm,
  SectionContainer,
} from "./styles";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [userUrls, setUserUrls] = useState([]);
  const { userInfo, setUserInfo } = useUserInfo();
  const { getUserUrls, getUserUrlsLoading, getUserUrlsError } =
    useGetUserUrls();

  function sendShorten(e) {
    e.preventDefault();
    console.log(isValidHttpUrl(url));
  }

  async function getUrlsOrFail() {
    try {
      const urls = await getUserUrls();
      setUserUrls(urls.urls);
      console.log(urls);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      getUrlsOrFail();
    }
  }, [userInfo]);

  return (
    <>
      <SectionContainer>
        <Title>Encurtador de URLs</Title>
        {getUserUrlsLoading && <>carregando...</>}
        {getUserUrlsError && <>deu ruim</>}
        <ShortenForm onSubmit={sendShorten}>
          <ShortenInput>
            <input
              required
              name="url"
              id="url"
              onChange={(e) => setUrl(e.target.value)}
            />

            <label className="title" htmlFor="url">
              {" "}
              Links que cabem no bolso
            </label>
            <IconLabel htmlFor="url">
              <ImAttachment />
            </IconLabel>
          </ShortenInput>
          <ShortenButton type="submit">Encurtar Link</ShortenButton>
        </ShortenForm>
        <UrlsContainer>
          {userUrls?.map((u, i) => (
            <UrlContainer key={i}>
              <UrlInfo>
                <a href={u.originalUrl}>{u.originalUrl}</a>
                <a
                  href={`${import.meta.env.VITE_API_BASE_URL}${u.shortenedUrl}`}
                >
                  {" "}
                  {import.meta.env.VITE_API_BASE_URL}
                  {u.shortenedUrl}
                </a>
                <h1>{u.visitsCounter} Visitas</h1>
              </UrlInfo>
              <DeleteButton>
                <RiDeleteBin6Line />
              </DeleteButton>
            </UrlContainer>
          ))}
        </UrlsContainer>
      </SectionContainer>
    </>
  );
}
