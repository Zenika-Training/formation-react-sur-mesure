import { useEffect } from "react";
import useAuthApi from "../api/useAuthApi";
import useUserInfos from "../userInfos/useUserInfos";
import "./Header.scss";

function Header() {
  const api = useAuthApi();
  const { userInfos, addInfos } = useUserInfos();

  useEffect(() => {
    api
      .get("/users/current")
      .then(({ data }) => addInfos(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="header__wrapper">
      <div className="header__greeting">Bonjour {userInfos.firstName}</div>
      <div className="header__karma">Karma: {userInfos.karma}</div>
    </div>
  );
}

export default Header;
