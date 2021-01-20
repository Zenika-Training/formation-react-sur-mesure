import { useState } from "react";

function Dont() {
  const [value, setValue] = useState(0);

  return (
    console.log("Rerender do") || (
      <div>
        <h2>Do</h2>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <div>Value: {value}</div>
        <div>Doubled: {value * 2}</div>
        <div>Quadruple: {value * 4}</div>
      </div>
    )
  );
}

export default Dont;
