import { useEffect, useState } from "react";

export function usePlayers() {
  // Load players state from localStorage. LocalStorage is used in place of a database.
  const [players, setPlayers] = useState<string[]>(
    JSON.parse(localStorage.getItem("players") || `[""]`)
  );

  // Automatically save state to localStorage when it changes. LocalStorage is used in place of a
  // database.
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  // If players changes, reset the scores in localstorage
  useEffect(() => {
    // Define an array of zeroes as strings with length of players length
    const scores = Array(players.length).fill("0");

    // Overwrite localstorage with scores
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [players]);

  return [players, setPlayers] as const;
}
