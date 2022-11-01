import { Center, Divider, Flex, Input, Text } from "@chakra-ui/react";
import { Button } from "./Button";

interface PlayerProps {
  player: string;
  score: number;
  selected: boolean;
  onClick: () => void;
  onClickDone: () => void;
  onChangeScore: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Player({
  player,
  score,
  selected,
  onClick,
  onClickDone,
  onChangeScore,
}: PlayerProps) {
  function handleClickDone(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onClickDone();
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    e.target.select();
  }

  return (
    <Flex
      onClick={onClick}
      direction="column"
      border={selected ? "2px solid" : "none"}
      borderColor="cyan.800"
      px={3}
      py={3}
      cursor="pointer"
      _hover={selected ? {} : { opacity: 0.6 }}
    >
      <Flex justify="space-between" flex={1}>
        <Center>
          <Text fontSize="2xl" mr={4}>
            {player}
          </Text>
        </Center>
        <Flex direction="column" align="flex-end">
          <Input
            type="number"
            textAlign="right"
            w={75}
            fontSize="2xl"
            variant="unstyled"
            value={score}
            onChange={onChangeScore}
            onFocus={handleFocus}
          />
          {selected && (
            <Text opacity={0.6} fontSize="sm">
              {score - 10_000}
            </Text>
          )}
        </Flex>
      </Flex>
      {selected && (
        <Flex align="flex-end" direction="column">
          <Divider mt={1} w={100} borderColor="gray.600" />
          <Button onClick={handleClickDone} mt={3} ml={6} size="sm">
            <Text>Commit</Text>
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
