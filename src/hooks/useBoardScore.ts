import { useEffect, useState } from "react";

export function useBoardScore() {
  // Load players state from localStorage. LocalStorage is used in place of a database.
  const [boardScore, setBoardScore] = useState<number>(
    parseInt(localStorage.getItem("board_score") || "0")
  );

  // Automatically save state to localStorage when it changes. LocalStorage is used in place of a
  // database.
  useEffect(() => {
    localStorage.setItem("board_score", boardScore.toString());
  }, [boardScore]);

  return [boardScore, setBoardScore] as const;
}
