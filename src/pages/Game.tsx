import { ArrowBackIcon } from "@chakra-ui/icons";
import { Divider, Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ConfirmModal } from "../components/ConfirmModal";
import { Players } from "../components/Players";
import { Score } from "../components/Score";
import { Settings } from "../components/Settings";
import { useBoardScore } from "../hooks/useBoardScore";
import { usePlayers } from "../hooks/usePlayers";
import { useScores } from "../hooks/useScores";
import { useTurn } from "../hooks/useTurn";

// TODO: When player is added, add another item to score array
export function Game() {
  const navigate = useNavigate();
  const [players] = usePlayers();
  const [scores, setScores] = useScores();
  const [turn, setTurn] = useTurn();
  const [boardScore, setBoardScore] = useBoardScore();
  const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onClose: onConfirmClose } = useDisclosure();
  const {
    isOpen: isSettingsOpen,
    onOpen: onSettingsOpen,
    onClose: onSettingsClose,
  } = useDisclosure();
  const [inputValue, setInputValue] = useState("0");
  const [round, setRound] = useState(0);

  function handleClickBack() {
    onConfirmOpen();
  }

  function handleConfirmQuit() {
    setScores(Array(players.length).fill(0));
    setTurn(0);
    setBoardScore(0);
    navigate("/setup");
  }

  function handleResetScores() {
    setScores(players.map(() => 0));
    setRound(0);
    setBoardScore(0);
    setInputValue("0");
    setTurn(0);
    onSettingsClose();
  }

  function handleClickBust() {
    setBoardScore(0);
    setInputValue("0");
  }

  function handleClickEnter() {
    setBoardScore((boardScore) => boardScore + Number(inputValue));
    setInputValue("0");
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleKeyDownInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleClickEnter();
    }
  }

  function handleClickPlayer(index: number) {
    // setTurn(index);
  }

  function handleClickDone(index: number) {
    // Add board score to player score
    setScores((scores) => {
      const newScores = [...scores];
      // I'm not sure when these values come in as values or when they come in as numbers
      // I blame js for allowing string concatenation with the plus operator
      newScores[index] = Number(newScores[index]) + Number(boardScore);
      return newScores;
    });

    // Set turn to next player
    setTurn((turn) => (turn + 1) % players.length);

    // If the turn is set back to zero, increment the round
    if (turn === players.length - 1) {
      setRound((round) => round + 1);
    }
  }

  function handleChangeScore(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    setScores((scores) => {
      const newScores = [...scores];
      newScores[index] = Number(event.target.value);
      return newScores;
    });
  }

  return (
    <Flex w="100%" direction="column">
      <Flex justify="space-between" w="100%" pt={6} px={6}>
        <IconButton
          aria-label="Back"
          bg="none"
          opacity="0.6"
          onClick={handleClickBack}
          icon={<ArrowBackIcon fontSize="xl" />}
        />
        <Text fontSize="2xl" color="gray.500">
          Round {round + 1}
        </Text>
        <Flex>
          <Settings isOpen={isSettingsOpen} onOpen={onSettingsOpen} onClose={onSettingsClose}>
            <Flex align="center" justify="space-between">
              <Text>Reset Game</Text>
              <Button onClick={handleResetScores}>Reset</Button>
            </Flex>
          </Settings>
        </Flex>
      </Flex>
      <ConfirmModal title="Quit Game" isOpen={isConfirmOpen} onClose={onConfirmClose}>
        <Flex align="center" justify="space-between" direction="column">
          <Text>
            Going back will start your game over. Are you sure you want to quit your game?
          </Text>
          <Button mt={6} bg="red.800" onClick={handleConfirmQuit} w="30%" minWidth={100}>
            Quit
          </Button>
        </Flex>
      </ConfirmModal>
      <Flex w="100%" maxWidth="700px" direction="column" mt={3}>
        <Flex>
          <Score
            onClickBust={handleClickBust}
            onClickEnter={handleClickEnter}
            onKeyDown={handleKeyDownInput}
            onChangeInput={handleChangeInput}
            inputValue={inputValue}
            score={boardScore}
          />
        </Flex>
        <Divider />
        <Players
          players={players}
          scores={scores}
          turn={turn}
          onClickPlayer={handleClickPlayer}
          onClickDone={handleClickDone}
          onChangeScore={handleChangeScore}
        />
      </Flex>
    </Flex>
  );
}
