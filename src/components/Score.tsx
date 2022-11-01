import { AddIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, Text } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
  inputValue: string;
  onClickBust: () => void;
  onClickEnter: () => void;
  onKeyDown: React.KeyboardEventHandler;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Score({
  score,
  inputValue,
  onClickBust,
  onClickEnter,
  onKeyDown,
  onChangeInput,
}: ScoreProps) {
  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    e.target.select();
  }

  return (
    <Flex w="100%" direction="column" align="center" pb={12}>
      <Flex align="center">
        <Text w={250} fontSize="7xl" color="gray.400" textAlign="center">
          {score}
        </Text>
        <IconButton
          ml={3}
          aria-label="Reset"
          bg="none"
          onClick={onClickBust}
          opacity="0.2"
          icon={<NotAllowedIcon fontSize="3xl" />}
        />
      </Flex>
      <Flex align="center">
        <Input
          w={250}
          type="number"
          onChange={onChangeInput}
          onFocus={handleFocus}
          onKeyDown={onKeyDown}
          value={inputValue}
          textAlign="center"
          color="gray.400"
          flex={1}
        />
        <IconButton
          ml={3}
          aria-label="Add"
          bg="cyan.800"
          color="gray.400"
          onClick={onClickEnter}
          icon={<AddIcon fontSize="xl" />}
        />
      </Flex>
    </Flex>
  );
}
