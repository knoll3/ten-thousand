import { CloseIcon } from "@chakra-ui/icons";
import { Text, Flex, Input, IconButton } from "@chakra-ui/react";

interface PlayerInputProps {
  player: string;
  index: number;
  isRemoveDisabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onRemove: (index: number) => void;
}

export function PlayerInput({
  player,
  index,
  onChange,
  onRemove,
  isRemoveDisabled,
}: PlayerInputProps) {
  return (
    <Flex align="center" maxWidth={600} w="100%">
      <Text opacity={0.6} fontSize="xl">
        {index + 1}
      </Text>
      <Input
        ml={3}
        maxLength={30}
        onChange={(e) => onChange(e, index)}
        value={player}
        placeholder="Player Name"
      />
      <IconButton
        disabled={isRemoveDisabled}
        onClick={() => onRemove(index)}
        ml={3}
        bg="none"
        aria-label="Remove Player"
        opacity="0.6"
        icon={<CloseIcon />}
      />
    </Flex>
  );
}
