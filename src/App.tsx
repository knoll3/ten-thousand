import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Pages } from "./pages";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Pages />
      </Router>
    </ChakraProvider>
  );
}

export default App;
