import { Container, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNetlify } from 'react-icons/si'
import { SiChakraui } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import healthcare from "../Components/Images/healthcare.JPG";
import medz from '../Components/Images/medz.JPG'
import yaatra from '../Components/Images/yaatra.jpeg'
import glamour from '../Components/Images/glamour.jpeg'
import Github from "../Components/Github";
import GithubStreak from "../Components/GithubStreak";
import GithubStateCard from "../Components/GithubStateCard";
import GithubLanguage from "../Components/GithubLanguage";
import { IoLogoNodejs } from 'react-icons/io'
import { DiMongodb } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import { RxVercelLogo } from 'react-icons/rx'
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
          title="HealthCare"
          discription="Healthcare is an online platform intended to provide authentic health and nutritional supplements. The company's platform provides a wide range of protein supplements, weight loss products."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={IoLogoNodejs}
          mongoose={DiMongodb}
          githubUrl="https://github.com/bharat24862486/defeated-interest-8343"
          netlifyUrl="https://frontend-vinaykumar7580.vercel.app/"
          banner={healthcare}
        />
        <ProjectCard 
          title="MedZ+"
          discription="MedZ+ brings to you an online platform, which can be accessed for all your health needs. Get your ayurvedic, homeopathic , vitamins & nutrition supplements health-related products delivered at home."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiRedux}
          mongoose={RxVercelLogo}
          githubUrl="https://medzplus.vercel.app/"
          netlifyUrl="https://medzplus.vercel.app/"
          banner={medz}
        />
        <ProjectCard  
          title="Yaatra"
          discription="Yaatra.com is a leading online travel Web site where travelers can make airline, hotel, and car rental reservations"
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          mongoose={SiNetlify}
          githubUrl="https://github.com/faizan0505/flaky-suggestion-4282"
          netlifyUrl="https://joyful-begonia-5f548b.netlify.app/fw22_0277home.html"
          banner={yaatra}
        />
        <ProjectCard 
          title="Glamour Beauty"
          discription="Glamour Beauty one of the most popular online E-commer platform that sells the cosmetics products. I'ts has a lot of brands and differents prodcuts.."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          mongoose={SiCss3}
          githubUrl="https://github.com/masaiff210880/posh-title-8378/tree/main/GLAMOUR_BEAUTY/glamourbeauty-app"
          netlifyUrl="https://steady-genie-364aba.netlify.app/"
          banner={glamour}
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
