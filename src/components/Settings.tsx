import { SettingsIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "./Button";

interface SettingsProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

export function Settings({ isOpen, onOpen, onClose, children }: SettingsProps) {
  return (
    <React.Fragment>
      <IconButton
        onClick={onOpen}
        aria-label="Settings"
        bg="none"
        size="md"
        opacity="0.6"
        icon={<SettingsIcon />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.600" color="gray.300" mx={3}>
          <ModalHeader textAlign="center">Settings</ModalHeader>
          <ModalCloseButton />
          <Divider mb={3} borderColor="gray.500" />
          <ModalBody my={3}>{children}</ModalBody>
          <Divider my={3} borderColor="gray.500" />
          <ModalFooter>
            <Button bg="gray.500" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
}
