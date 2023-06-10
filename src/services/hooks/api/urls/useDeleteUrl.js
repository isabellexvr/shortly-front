import urlsApi from "../../../api/urlsApi";
import useAsync from "../../useAsync";
import useToken from "../../useToken";

export default function useDeleteUrl(){
    const token = useToken();

    const {
        loading: deleteUrlLoading,
        error: deleteUrlError,
        connect: deleteUrl,
      } = useAsync((params) => urlsApi.deleteUrl(params, token));

      return {
        deleteUrlLoading,
        deleteUrlError,
        deleteUrl,
      };

}