import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Heading, VStack, Text, Box, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { IconButton } from "../components/IconButton";
import { PlayerInput } from "../components/PlayerInput";
import { Settings } from "../components/Settings";
import { usePlayers } from "../hooks/usePlayers";

export function Setup() {
  const navigate = useNavigate();
  const [players, setPlayers] = usePlayers();
  const {
    isOpen: isSettingsOpen,
    onOpen: onSettingsOpen,
    onClose: onSettingsClose,
  } = useDisclosure();

  function handleClickBack() {
    navigate("/");
  }

  function handleChangePlayerName(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    setPlayers((players) => {
      const newPlayers = [...players];
      newPlayers[index] = e.target.value;
      return newPlayers;
    });
  }

  function handleAddPlayer() {
    setPlayers((players) => [...players, ""]);
  }

  function handleRemovePlayer(index: number) {
    console.log(players.length);
    if (players.length === 1) {
      setPlayers([""]);
    } else {
      setPlayers((players) => {
        const newPlayers = [...players];
        newPlayers.splice(index, 1);
        return newPlayers;
      });
    }
  }

  function handleRemoveAll() {
    setPlayers([""]);
    onSettingsClose();
  }

  function handleStartGame() {
    navigate("/game");
  }

  return (
    <Flex w="100%" h="100%" mt={12} align="center" px={6} direction="column">
      <Flex align="center">
        <Heading size="lg">Add Players</Heading>
        <IconButton
          onClick={handleClickBack}
          position="absolute"
          aria-label="Back"
          left="15px"
          bg="none"
          size="lg"
          opacity="0.6"
          icon={<ArrowBackIcon fontSize="2xl" />}
        />
        <Flex position="absolute" right={4}>
          <Settings isOpen={isSettingsOpen} onOpen={onSettingsOpen} onClose={onSettingsClose}>
            <Flex align="center" justify="space-between">
              <Text>Remove all players</Text>
              <Button onClick={handleRemoveAll}>Remove All</Button>
            </Flex>
          </Settings>
        </Flex>
      </Flex>
      <Flex
        mt={6}
        h="75%"
        w="100%"
        overflow="auto"
        align="center"
        direction="column"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="gray.600"
      >
        <VStack mt={6} spacing={6} w="100%">
          {players.map((player, i) => (
            <PlayerInput
              key={i}
              player={player}
              index={i}
              onChange={handleChangePlayerName}
              onRemove={handleRemovePlayer}
            />
          ))}
        </VStack>
        <Flex>
          <IconButton
            onClick={handleAddPlayer}
            size="lg"
            mt={6}
            bg="gray.800"
            aria-label="Add Player"
            opacity="0.6"
            icon={<AddIcon />}
          />
        </Flex>
      </Flex>
      <Flex w="100%" mt={6} h="100px" justify="center">
        <Button onClick={handleStartGame} maxWidth={400} w="full">
          Start Game
        </Button>
      </Flex>
      <Box h={100}></Box>
    </Flex>
  );
}
