import { useEffect, useState } from "react";

export function useTurn() {
  // Load players state from localStorage. LocalStorage is used in place of a database.
  const [turn, setTurn] = useState<number>(parseInt(localStorage.getItem("turn") || "0"));

  // Automatically save state to localStorage when it changes. LocalStorage is used in place of a
  // database.
  useEffect(() => {
    localStorage.setItem("turn", turn.toString());
  }, [turn]);

  return [turn, setTurn] as const;
}
