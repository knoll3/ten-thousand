import { Box, Divider, Flex } from "@chakra-ui/react";
import { Player } from "./Player";

interface PlayersProps {
  players: string[];
  scores: number[];
  turn: number;
  onClickPlayer: (index: number) => void;
  onClickDone: (index: number) => void;
  onChangeScore: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

export function Players({
  players,
  scores,
  turn,
  onClickPlayer,
  onClickDone,
  onChangeScore,
}: PlayersProps) {
  const playerList = players.map((player, i) => (player === "" ? `Player ${i + 1}` : player));

  return (
    <Flex direction="column" my={6} mx={6}>
      {playerList.map((player, index) => (
        <Box key={index}>
          <Player
            player={player}
            score={scores[index]}
            selected={turn === index}
            onClick={() => onClickPlayer(index)}
            onClickDone={() => onClickDone(index)}
            onChangeScore={(event) => onChangeScore(event, index)}
          />
          {index !== playerList.length - 1 && <Divider borderColor="gray.600" />}
        </Box>
      ))}
    </Flex>
  );
}
