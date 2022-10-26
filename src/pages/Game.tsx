import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

export function Game() {
  const [players, setPlayers] = useState<string[]>([""]);

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
    setPlayers((players) => {
      const newPlayers = [...players];
      newPlayers.splice(index, 1);
      return newPlayers;
    });
  }

  function handleStartGame() {
    //
  }

  return (
    <Flex w="100%" h="100%" mt={12} align="center" px={6} direction="column">
      <Heading size="lg">Add Players</Heading>
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
            <Flex align="center" maxWidth={600} w="100%">
              <Text opacity={0.6} fontSize="xl">
                {i + 1}
              </Text>
              <Input
                ml={3}
                maxLength={30}
                onChange={(e) => handleChangePlayerName(e, i)}
                key={i}
                value={player}
              />
              <IconButton
                onClick={() => handleRemovePlayer(i)}
                ml={3}
                bg="none"
                aria-label="Remove Player"
                opacity="0.6"
                _hover={{
                  opacity: 0.4,
                }}
                _active={{
                  opacity: 0.2,
                }}
                icon={<CloseIcon />}
              />
            </Flex>
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
            _hover={{
              opacity: 0.4,
            }}
            _active={{
              opacity: 0.2,
            }}
            icon={<AddIcon />}
          />
        </Flex>
      </Flex>
      <Flex w="100%" mt={6} h="100px" justify="center">
        <Button
          onClick={handleStartGame}
          maxWidth={400}
          w="full"
          bg="cyan.700"
          _hover={{
            opacity: 0.8,
          }}
          _active={{
            opacity: 0.6,
          }}
        >
          Start Game
        </Button>
      </Flex>
    </Flex>
  );
}
