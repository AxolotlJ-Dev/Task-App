import { useEffect, useState } from "react";

export function UseLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key);
    const tasks = JSON.parse(item);
    if (tasks) {
      setState(tasks);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
