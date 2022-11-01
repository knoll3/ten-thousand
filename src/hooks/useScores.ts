import { useEffect, useState } from "react";

export function useScores() {
  // Load players state from localStorage. LocalStorage is used in place of a database.

  const [scores, setScores] = useState<number[]>(
    JSON.parse(localStorage.getItem("scores") || `["0"]`)
  );

  // Automatically save state to localStorage when it changes. LocalStorage is used in place of a
  // database.
  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  return [scores, setScores] as const;
}
