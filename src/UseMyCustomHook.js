import { useClickMe, useClickMeWithValue } from "./useClickMe";

function UseMyCustomHook() {
  const onClick = useClickMe();
  const [timesClicked, onClickWithValue] = useClickMeWithValue();

  return (
    <div>
      <h2>useClickMe (custom hook)</h2>
      <button onClick={onClick}>Click Me ! (no value)</button>
      <button onClick={onClickWithValue}>Click Me ! ({timesClicked})</button>
    </div>
  );
}

export default UseMyCustomHook;
