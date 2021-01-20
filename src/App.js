import UseCallbackHook from "./UseCallbackHook";
import UseMemoHook from "./UseMemoHook";
import UseMyCustomHook from "./UseMyCustomHook";

function App() {
  return (
    <div className="App">
      <UseMemoHook />
      <UseCallbackHook />
      <UseMyCustomHook />
    </div>
  );
}

export default App;
