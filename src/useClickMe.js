import { useEffect, useState } from "react";

const messages = [
  "Nobody clicked me",
  "You clicked me",
  "You clicked me twice",
  "Stop.",
  "Please stop !",
  "Let's forget that, okay ?",
];

export function useClickMe() {
  const [times, setTimes] = useState(0);

  useEffect(() => {
    if (times !== 0) {
      window.alert(messages[times]);
    }

    if (times >= 5) {
      setTimes(0);
    }
  }, [times]);

  return () => setTimes((t) => t + 1);
}

export function useClickMeWithValue() {
  const [times, setTimes] = useState(0);

  useEffect(() => {
    if (times !== 0) {
      window.alert(messages[times]);
    }

    if (times >= 5) {
      setTimes(0);
    }
  }, [times]);

  return [times, () => setTimes((t) => t + 1)];
}
