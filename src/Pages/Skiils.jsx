import React from "react";
import { Container, Text, Grid, GridItem, Icon } from "@chakra-ui/react";
import { IoLogoJavascript } from "react-icons/io";
const Skills = () => {
  return (
    <div id="skills">
      <Container maxW={"4xl"}>
        <Text
          as={"span"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "red.400",
            zIndex: -1,
          }}
        >
          SKILLS
        </Text>
      </Container>
    </div>
  );
};

export default Skills;
