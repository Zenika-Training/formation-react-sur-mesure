import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useUserInfos from "../userInfos/useUserInfos";

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { addToken } = useUserInfos();

  const handleUpdateField = (field) => (e) =>
    setFormData((fd) => ({ ...fd, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/login", formData)
      .then(({ data }) => {
        addToken(data);
        const previous = history.location.state.previous;
        history.push(previous && previous !== "/login" ? previous : "/");
      })
      .catch((e) => console.error(e));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username :</label>
        <input
          id="username"
          type="text"
          value={formData.username}
          onChange={handleUpdateField("username")}
        />
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleUpdateField("password")}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
