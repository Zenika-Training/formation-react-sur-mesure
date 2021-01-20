import { createContext, useContext, useEffect, useState } from "react";

const UserInfoContext = createContext({});

const useUserInfo = () => useContext(UserInfoContext);

// Context provider to be used only once on top of your app
export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const loadUserInfo = () => {
    console.log("Load user info !");
    // make it an API call
    setUserInfo({ id: 5, firstName: "Bilbo", lastName: "Baggins" });
  };

  const updateUser = (user) => {
    // make it an API call
    setUserInfo((u) => ({ ...u, ...user }));
  };

  useEffect(
    () => {
      loadUserInfo();
    },
    [
      /* Listen to some props to reload user info */
    ]
  );

  return (
    <UserInfoContext.Provider value={[userInfo, updateUser]}>
      {children}
    </UserInfoContext.Provider>
  );
};

// custom hooks to use wherever you need user info
export default useUserInfo;
