import { useState, useEffect } from "react";

function Dont() {
  const [value, setValue] = useState(0);
  const [doubledValue, setDoubledValue] = useState(value * 2);
  const [quadrupledValue, setQuadrupledValue] = useState(doubledValue * 2);

  useEffect(() => {
    setDoubledValue(value * 2);
  }, [value]);

  useEffect(() => {
    setQuadrupledValue(doubledValue * 2);
  }, [doubledValue]);

  return (
    console.log("Rerender dont") || (
      <div>
        <h2>Dont</h2>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <div>Value: {value}</div>
        <div>Doubled: {doubledValue}</div>
        <div>Quadruple: {quadrupledValue}</div>
      </div>
    )
  );
}

export default Dont;
