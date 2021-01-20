import UserDetail from "./UserDetail";
import { UserInfoProvider } from "./UserInfoContext";
import UserInfoForm from "./UserInfoForm";

function App() {
  return (
    <UserInfoProvider>
      <div className="App">
        <UserDetail />
        <UserInfoForm />
      </div>
    </UserInfoProvider>
  );
}

export default App;
