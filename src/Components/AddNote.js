import {
  Text,
  Button,
  Flex,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { saveNotes } from "./SaveNotes";
import { BackGroundColors } from "./Background";

const AddNote = ({ setNotes, notes, setBgColor, bgColor }) => {
  const [inputValue, setInputValue] = useState({
    title: "",
    note: "",
  });

  const [error, setError] = useState(false);

  // Save Notes To Local Storage
  useEffect(() => saveNotes(notes), [notes]);

  // Get The Input Value From User
  const getInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const createNote = () => {
    if (inputValue.note === "" || inputValue.title === "") {
      setError(true);
    } else {
      setError(false);
      setNotes([
        ...notes,
        {
          title: inputValue.title,
          note: inputValue.note,
          bg: bgColor,
          //  Create Unique Key For Note
          key: Math.floor(Math.random() * 100000),
        },
      ]);
      console.log(notes);
      // Clear The Input Value After Create New Note
      setInputValue({ title: "", note: "" });
    }
  };
  const { colorMode } = useColorMode();
  return (
    <Flex justify={"center"} align={"center"} m={"10px"} mt={"30px"}>
      <Flex
        width={"340px"}
        borderRadius={4}
        shadow={"base"}
        bg={colorMode === "dark" ? "gray.500" : ""}
        borderWidth={1}
        p={4}
        direction={"column"}
      >
        {error ? (
          <Alert status="error" mb={4}>
            <AlertIcon />
            <AlertTitle mr={2}>Please Fill The Fields !</AlertTitle>
            <CloseButton
              onClick={() => setError(false)}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        ) : (
          ""
        )}
        <Text mb={2} fontSize={'2xl'} userSelect={'none'}>Create Your Note</Text>
        <Input
          name={"title"}
          bg={"#fff"}
          color={"#000"}

          onChange={getInputValue}
          value={inputValue.title}
          type={"text"}
          placeholder={"Title"}
          _placeholder={{ color: "black" }}
        />
        <Input
          name={"note"}
          bg={"#fff"}
          color={"#000"}
          onChange={getInputValue}
          value={inputValue.note}
          type={"text"}
          m={"10px 0"}
          placeholder={"Note Something ..."}
          _placeholder={{ color: "black" }}
        />
        <Flex
          m={"10px 0"}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Heading
            color={colorMode === "dark" ? "#fff" : colorMode === 'light'? "#000":''}
            fontSize={"md"}
          >
            Chose Background For Your Note
          </Heading>
          <Flex>
            {/* BackGround Colors */}
            {BackGroundColors.map( color => (
              <Button
                m={"0 4px"}
                h={"40px"}
                w={"40px"}
                bg={color}
                cursor={"pointer"}
                _hover={{transition: '.1s'}}
                onClick={() => setBgColor(color)}
                borderRadius={"50px"}
              />
            ))}
          </Flex>
        </Flex>
        <Button
          bg={"gray.700"}
          color={"white"}
          _hover={{ bg: "gray.600", transition: ".5s" }}
          leftIcon={<FaPlusCircle />}
          onClick={createNote}
        >
          Add Note
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddNote;
