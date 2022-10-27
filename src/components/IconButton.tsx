import { IconButton as IconButtonBase, IconButtonProps } from "@chakra-ui/react";

export function IconButton(props: IconButtonProps) {
  return (
    <IconButtonBase
      {...props}
      _hover={{
        opacity: 0.4,
      }}
      _active={{
        opacity: 0.2,
      }}
    />
  );
}
