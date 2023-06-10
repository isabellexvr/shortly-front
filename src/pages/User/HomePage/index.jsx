import { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import useUserInfo from "../../../contexts/hooks/useUserInfo";
import useGetUserUrls from "../../../services/hooks/api/useGetUserUrls";
import { RiDeleteBin6Line } from "react-icons/ri";
import { isValidUrl } from "./helpers";
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
  CleanButton
} from "./styles";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [userUrls, setUserUrls] = useState([]);
  const { userInfo, setUserInfo } = useUserInfo();
  const { getUserUrls, getUserUrlsLoading, getUserUrlsError } =
    useGetUserUrls();

  function sendShorten(e) {
    e.preventDefault();
    console.log(isValidUrl(url));
    console.log();
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
        <Title>Encurtar URLs</Title>
        {getUserUrlsLoading && <>carregando...</>}
        {getUserUrlsError && <>deu ruim</>}
        <ShortenForm onSubmit={sendShorten}>
          <ShortenInput>
            <input
              required
              name="url"
              id="url"
              type="url"
              onChange={(e) =>
                setUrl(
                  url.length === 0 ? "http://" + e.target.value : e.target.value
                )
              }
              value={url}
            />

            <label className="title" htmlFor="url">
              {" "}
              Links que cabem no bolso
            </label>
            <IconLabel htmlFor="url">
              <ImAttachment />
            </IconLabel>
          </ShortenInput>
          <CleanButton onClick={() => setUrl("")} >Limpar</CleanButton>
          <ShortenButton type="submit">Encurtar</ShortenButton>
        </ShortenForm>
        <UrlsContainer>
          {userUrls?.map((u, i) => (
            <UrlContainer key={i}>
              <UrlInfo>
                <a href={u.originalUrl}>{u.originalUrl}</a>
                <a
                  target="_SEJ"
                  href={`${import.meta.env.VITE_API_BASE_URL}urls/open/${
                    u.shortenedUrl
                  }`}
                  rel="noreferrer"
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
