import { Text, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export function Home() {
  const navigate = useNavigate();

  function handleClickNewGame() {
    navigate("/setup");
  }

  return (
    <Flex w="100%" h="100%" align="center" justify="center" px={6}>
      <Flex direction="column">
        <Heading textAlign="center">Ten Thousand Score Keeper</Heading>
        <Button onClick={handleClickNewGame} size="lg" w="full" py={9} mt={6}>
          <Text fontSize="lg">New Game</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
