import { useState } from "react";
import Materiel from "./Materiel";
import OwnCSS from "./OwnCSS";
import OwnSass from "./OwnSass";

function App() {
  const [sass, setSass] = useState(true);
  return (
    <div className="App">
      <Materiel />
      {sass ? <OwnSass /> : <OwnCSS />}
      <button onClick={() => setSass((s) => !s)} style={{ marginTop: "1rem" }}>
        Switch to {sass ? "css" : "sass"}
      </button>
    </div>
  );
}

export default App;
