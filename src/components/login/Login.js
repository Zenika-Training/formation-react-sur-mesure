function Login() {
  return (
    <form>
      <div>
        <label htmlFor="username">Username :</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input id="password" type="password" />
      </div>
    </form>
  );
}

export default Login;
