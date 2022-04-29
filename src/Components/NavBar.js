import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      p={3}
      shadow={"base"}
      borderBottom={1}
      justify={"space-between"}
      align={"center"}
      
    >
      <Heading fontSize={"xx-large"}>Notes App</Heading>
      <IconButton
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default NavBar;
