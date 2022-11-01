import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "./Button";

interface ConfirmModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export function ConfirmModal({ title, isOpen, onClose, children }: ConfirmModalProps) {
  return (
    <React.Fragment>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.600" color="gray.300" mx={3}>
          <ModalHeader textAlign="center">{title}</ModalHeader>
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
