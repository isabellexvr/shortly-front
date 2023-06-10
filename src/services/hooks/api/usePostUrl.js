import urlsApi from "../../api/urlsApi";
import useAsync from "../useAsync";
import useToken from "../useToken";

export default function usePostUrl(){
    const token = useToken();

    const {
        loading: postUrlLoading,
        error: postUrlError,
        connect: postUrl,
      } = useAsync((data) => urlsApi.createUrl(data, token), false);
    
      return {
        postUrlLoading,
        postUrlError,
        postUrl,
      };
}