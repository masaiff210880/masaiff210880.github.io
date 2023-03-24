import { Container, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNetlify } from 'react-icons/si'
import { SiChakraui } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import yaatra from "../Components/Images/yaatra.jpeg";
import beauty from '../Components/Images/beauty.jpeg'
import shoping from '../Components/Images/shoping.jpeg'
import Github from "../Components/Github";
import GithubStreak from "../Components/GithubStreak";
import GithubStateCard from "../Components/GithubStateCard";
import GithubLanguage from "../Components/GithubLanguage";
const Projects = () => {
  return (
    <>
      <Container maxW={"4xl"} marginTop={50}>
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
          PROJECTS
        </Text>
        <ProjectCard
          title="Yaatra"
          discription="Yaatra.com, Inc. operates a leading online travel Web site where travelers can take control of their bookings and reservations and research information about potential destinations."
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          githubUrl="https://github.com/faizan0505/flaky-suggestion-4282"
          netlifyUrl="https://joyful-begonia-5f548b.netlify.app"
          banner={yaatra}
        />
        <ProjectCard 
          title="Beauty Trip"
          discription="Beauty Trip basically is a platform where all the travellers from all across the globe can help each other in planning out various trips and give glimpses for some new location"
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          githubUrl="https://github.com/masaiff210880/caring-request-2944"
          netlifyUrl="https://willowy-cannoli-6a5692.netlify.app"
          banner={beauty}
        />
        <ProjectCard  
          title="Glamour Beauty"
          discription="Glamour Beauty one of the most popular online E-commer platform that sells the cosmetics products. I'ts has a lot of brands and differents prodcuts."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://steady-genie-364aba.netlify.app"
          netlifyUrl="https://steady-genie-364aba.netlify.app"
          banner={beauty}
        />
        <ProjectCard 
          title="Shoping CRUD Application"
          discription="Shopping is an online platform where people can by-products and in this application has an admin page where the admin can add and edit any particular products."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/masai-course/fw21_0880_ramSurat/tree/master/unit-5/sprint-3/day-1/assignments/reactcrud-app"
          netlifyUrl="https://radiant-kataifi-16042a.netlify.app"
          banner={shoping}
        />
        <Github/>
        <GithubStreak/>
        <GithubStateCard/>
      </Container>
      <GithubLanguage/>
    </>
  );
};

export default Projects;
