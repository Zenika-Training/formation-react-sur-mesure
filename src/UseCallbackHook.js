import { useCallback, useEffect, useState } from "react";

function UseCallbackHook() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const add = () => console.log(a + b);

  const memoizedAdd = useCallback(() => add(), [a, b]);

  return (
    <div>
      <h2>useCallback</h2>
      <label htmlFor="a">A :</label>
      <input
        name="a"
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <label htmlFor="b">B :</label>
      <input
        name="b"
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <label htmlFor="c">C :</label>
      <input
        name="c"
        type="number"
        value={c}
        onChange={(e) => setC(parseInt(e.target.value))}
      />
      <UsingMemoizedCallback callback={memoizedAdd} />
      <UsingStandardCallback callback={add} />
    </div>
  );
}

function UsingMemoizedCallback({ callback }) {
  useEffect(() => {
    console.log("Rerender memoized");
  }, [callback]);

  return <button onClick={() => callback()}>Trigger memoized</button>;
}

function UsingStandardCallback({ callback }) {
  useEffect(() => {
    console.log("Rerender standard");
  }, [callback]);

  return <button onClick={() => callback()}>Trigger standard</button>;
}

export default UseCallbackHook;
