import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Game } from "./Game";

export function Pages() {
  return (
    <Flex h="100vh" bg="gray.700" color="gray.300" overflow="hidden">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </Flex>
  );
}
