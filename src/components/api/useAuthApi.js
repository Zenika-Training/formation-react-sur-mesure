import axios from "axios";
import { useHistory } from "react-router-dom";
import useUserInfos from "../userInfos/useUserInfos";

const withoutBodyRequest = (method, token, history) => (url, config = {}) =>
  axios[method](url, {
    ...config,
    headers: { ...(config.headers || {}), authorization: `Bearer ${token}` },
  }).catch((err) => {
    if (err.response.status === 401) {
      history.push("/login", { previous: history.location.pathname });
    } else {
      throw err;
    }
  });

const withBodyRequest = (method, token, history) => (url, body, config = {}) =>
  axios[method](url, body, {
    ...config,
    headers: { ...(config.headers || {}), authorization: `Bearer ${token}` },
  }).catch((err) => {
    if (err.response.status === 401) {
      history.push("/login", { previous: history.location.pathname });
    } else {
      throw err;
    }
  });

const useAuthApi = () => {
  const history = useHistory();

  const {
    userInfos: { token },
  } = useUserInfos();

  const api = {
    get: withoutBodyRequest("get", token, history),
    delete: withoutBodyRequest("delete", token, history),
    post: withBodyRequest("post", token, history),
    put: withBodyRequest("put", token, history),
    patch: withBodyRequest("patch", token, history),
  };

  return api;
};

export default useAuthApi;
