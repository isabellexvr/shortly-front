import { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import useUserInfo from "../../../contexts/hooks/useUserInfo";
import useGetUserUrls from "../../../services/hooks/api/users/useGetUserUrls";
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
  CleanButton,
  ShortenedUrl,
} from "./styles";
import toast, { Toaster } from "react-hot-toast";
import usePostUrl from "../../../services/hooks/api/urls/usePostUrl";
import useDeleteUrl from "../../../services/hooks/api/urls/useDeleteUrl";
import jwt_decode from "jwt-decode";
import useToken from "../../../services/hooks/useToken";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopyAlt } from "react-icons/bi";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [userUrls, setUserUrls] = useState([]);
  const { userInfo, setUserInfo } = useUserInfo();
  const token = useToken();
  const navigate = useNavigate();

  const { getUserUrls, getUserUrlsLoading, getUserUrlsError } =
    useGetUserUrls();
  const { postUrl, postUrlLoading } = usePostUrl();
  const { deleteUrl, deleteUrlLoading } = useDeleteUrl();

  async function sendShorten(e) {
    e.preventDefault();
    if (!isValidUrl(url)) {
      toast.error("Link inválido");
      return;
    }
    try {
      await postUrl({ originalUrl: url });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteUrl(urlId) {
    try {
      await deleteUrl(urlId);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUrlsOrFail() {
    const decoded = jwt_decode(token);
    const expiration = new Date(decoded.exp * 1000);
    if (new Date() > expiration) {
      setUserInfo({});
      navigate("/sign-in");
      return;
    }
    try {
      const urls = await getUserUrls();
      setUserUrls(urls.urls);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      getUrlsOrFail();
    }
  }, [userInfo, postUrlLoading, deleteUrlLoading]);

  return (
    <>
      <Toaster />
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
          <div className="buttons">
            <CleanButton type="reset" onClick={() => setUrl("")}>
              Limpar
            </CleanButton>
            <ShortenButton type="submit">Encurtar</ShortenButton>
          </div>
        </ShortenForm>
      </SectionContainer>
      <SectionContainer>
        <Title>Suas URLs</Title>
        <UrlsContainer>
          {userUrls?.map((u, i) => (
            <UrlContainer key={i}>
              <UrlInfo>
                <a href={u.originalUrl}>
                  {u.originalUrl.length > 28
                    ? u.originalUrl.slice(0, 25) + "..."
                    : u.originalUrl}
                </a>
                <ShortenedUrl>
                  <a
                    target="_SEJ"
                    href={`${import.meta.env.VITE_API_BASE_URL}urls/open/${
                      u.shortenedUrl
                    }`}
                    rel="noreferrer"
                  >
                    {u.shortenedUrl}
                  </a>
                  <CopyToClipboard
                    text={`${import.meta.env.VITE_API_BASE_URL}urls/open/${
                      u.shortenedUrl
                    }`}
                  >
                    <button>
                      <BiCopyAlt />
                    </button>
                  </CopyToClipboard>
                </ShortenedUrl>

                <h1>{u.visitsCounter} Visitas</h1>
              </UrlInfo>
              <DeleteButton onClick={() => handleDeleteUrl(u.id)}>
                <RiDeleteBin6Line />
              </DeleteButton>
            </UrlContainer>
          ))}
        </UrlsContainer>
      </SectionContainer>
    </>
  );
}
