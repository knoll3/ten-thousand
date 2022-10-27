import { Button as ButtonBase, ButtonProps } from "@chakra-ui/react";

export function Button(props: ButtonProps) {
  return (
    <ButtonBase
      bg="cyan.700"
      _hover={{
        opacity: 0.8,
      }}
      _active={{
        opacity: 0.6,
      }}
      {...props}
    >
      {props.children}
    </ButtonBase>
  );
}
