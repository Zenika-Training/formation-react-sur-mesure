import { useEffect, useState } from "react";
import useUserInfo from "./UserInfoContext";

function UserInfoForm() {
  const [
    { firstName: originalFirstName, lastName: originalLastName },
    setUserInfo,
  ] = useUserInfo();
  const [firstName, setFirstName] = useState(originalFirstName);
  const [lastName, setLastName] = useState(originalLastName);

  useEffect(() => {
    setFirstName(originalFirstName);
  }, [originalFirstName]);

  useEffect(() => {
    setLastName(originalLastName);
  }, [originalLastName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ firstName, lastName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update user infos</h2>
      <div>
        <label htmlFor="first">First name :</label>
        <input
          name="first"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="last">Last name :</label>
        <input
          name="last"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button type="submit">Validate</button>
    </form>
  );
}

export default UserInfoForm;
