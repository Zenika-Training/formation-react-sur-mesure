import { useMemo, useState } from "react";

function UseMemoHook() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const add = () => {
    console.log(`Will add ${a} to ${b} and return ${a + b}`);
    for (let i = 0; i < 1000000000; i++) {
      // just wait
    }
    return a + b;
  };

  const memoizedAdd = useMemo(() => add(), [a, b]);

  return (
    <div>
      <h2>useMemo</h2>
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
      <input
        name="c"
        type="number"
        value={c}
        onChange={(e) => setC(parseInt(e.target.value))}
      />
      <button onClick={() => console.log(memoizedAdd)}>A + B</button>
    </div>
  );
}

export default UseMemoHook;
