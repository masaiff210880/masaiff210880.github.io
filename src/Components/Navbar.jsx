import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import resume from "../Components/Images/Ram_Surat_Resume.pdf";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SlDocs } from "react-icons/sl";
import "./Navbar.css";
import Name from "./Name";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onButtonClick = () => {
    window.open(resume);
  };

  return (
    <div id="nav-menu">
      <Box bg={useColorModeValue("#4299e1", "#1a202c")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
            fontWeight={"bold"}
          >
            <Box>
              <Name />
            </Box>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              <Button className="nav-link home">
                <a href="#home">
                  {" "}
                  <b>Home</b>
                </a>
              </Button>

              <Button className="nav-link about">
                <a href="#about">
                  <b>About</b>
                </a>
              </Button>

              <Button className="nav-link skills">
                <a href="#skills">
                  {" "}
                  <b>Skills</b>
                </a>
              </Button>

              <Button className="nav-link projects">
                <a href="#projects">
                  <b>Projects</b>
                </a>
              </Button>

              <Button className="nav-link contact">
                <a href="#contact">
                  <b>Contact</b>
                </a>
              </Button>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} columnGap={5}>
            <Button
              onClick={toggleColorMode}
              style={{ border: "1px solid gray", borderRadius: "10px" }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              backgroundColor="teal"
              _hover={{ bg: "#a891b7", color: "black" }}
              color="white"
              variant={"solid"}
              colorScheme={"teal"}
              mr={4}
              leftIcon={<SlDocs />}
              onClick={onButtonClick}
              size={["sm", "md"]}
              download="Ram_Surat_Resume"
              id="resume-button-1 resume-button-2"
              className="nav-link resume"
            >
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download="Ram_Surat_Resume"
                id="resume-link-1 resume-link-2"
              >
                RESUME
              </a>
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Button className="nav-link home">
                <a href="#home">
                  {" "}
                  <b>Home</b>
                </a>
              </Button>

              <Button className="nav-link home">
                <a href="#about">
                  <b>About</b>
                </a>
              </Button>

              <Button className="nav-link skills">
                <a href="#skills">
                  {" "}
                  <b>Skills</b>
                </a>
              </Button>

              <Button className="nav-link projects">
                <a href="#projects">
                  <b>Projects</b>
                </a>
              </Button>

              <Button className="nav-link contact">
                <a href="#contact">
                  <b>Contact</b>
                </a>
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
