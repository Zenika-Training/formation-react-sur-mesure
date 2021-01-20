import useUserInfo from "./UserInfoContext";

function UserDetail() {
  const [{ id, firstName, lastName }] = useUserInfo();

  return (
    <div>
      <h2>Context consumption</h2>
      <div>ID: {id}</div>
      <div>First name: {firstName}</div>
      <div>Last name: {lastName}</div>
    </div>
  );
}

export default UserDetail;
