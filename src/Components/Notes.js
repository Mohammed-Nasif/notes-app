import { Text, Flex, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";

const Notes = ({ notes, setNotes }) => {
  
  const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

  const deleteNote = (key) => {
    const newNotes = notes.filter((note) => note.key !== key);
    setNotes(newNotes);
  };

  return (
    <Flex
      justify={"center"}
      align={"center"}
      w={{ base: "95%", md: "600px" }}
      m={"auto"}
      mb={12}
      direction={{ base: "column", md: "row" }}
      flexWrap={"wrap"}
    >
      {notes.map((note) => (
        <Flex
          bg={note.bg}
          direction={"column"}
          borderRadius={4}
          key={note.key}
          color={"#fff"}
          m={"0 10px"}
          mt={4}
          p={4}
          h={"full"}
          shadow={"base"}
          w={"230px"}
        >
          <Heading fontSize={'2xl'}>{note.title}</Heading>
          <Text>{note.note}</Text>
          <Flex
            mt={4}
            justify={"center"}
            align={"center"}
            justifyContent={"space-between"}
          >
            <Button
              _hover={{ transition: ".5s", bg: "gray.600" }}
              bg={"gray.700"}
              color={'#fff'}
              leftIcon={<FaTrash />}
              onClick={() => deleteNote(note.key)}
            >
              Delete
            </Button>
            <Text>{date}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Notes;
