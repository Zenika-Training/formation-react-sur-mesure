import { createContext, useContext, useState } from "react";

const UserInfoContext = createContext({});

export function UserInfosProvider({ children }) {
  const [userInfos, setUserInfos] = useState({});

  const addInfos = (infos) => setUserInfos((uI) => ({ ...uI, ...infos }));

  const addToken = (token) => setUserInfos((uI) => ({ ...uI, token }));

  const resetInfos = () => setUserInfos({});

  return (
    <UserInfoContext.Provider
      value={{ userInfos, addInfos, addToken, resetInfos }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}

const useUserInfos = () => useContext(UserInfoContext);

export default useUserInfos;
