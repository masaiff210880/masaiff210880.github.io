import React from 'react';
import {
  Box,
  Image,
  Text,
  Container,
  Stack,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { FaHandPointRight } from 'react-icons/fa'
import Photo from '../Components/Photo';
const About = () => {
  return (
    <div id='about' className='about section'>
      <Container maxW={'4xl'} marginTop={100}>
      <Text
              id='about' className='about section'
              as={'span'}
              fontSize={'4xl'}
              fontWeight={'bold'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              ABOUT ME
            </Text>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 8 }}
        py={{ base: 20, md: 20 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={{md:'300px',lg:'full'}}>
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={{md:'80%',lg:'80%'}}
            overflow={'hidden'}>
            <Photo/>
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 10, md: 81 }} 
          py={{ base: 20, md: 15 }} lineHeight={8}>
          <Text color={'gray.500'} fontSize={"20px"} textAlign={'justify'} fontWeight={'bold'} marginTop={5}>
          Hi, Everyone, I am Ram Surat from Mirzapur, Uttar Pradesh. I have completed my Diploma from Computer Science Engineering , SAMS Institute of Technoloy Varanasi.
          <Heading fontSize={'22px'} marginTop={10}>Some of my Interest apart from coding :</Heading>
          <List spacing={3} marginTop={10}>
            <ListItem>
              <ListIcon as={FaHandPointRight} color='green.500' />
                Video Game
            </ListItem>
            <ListItem>
              <ListIcon as={FaHandPointRight} color='green.500' />
              Cricket Enthusiast
            </ListItem>
            
            </List>
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
          </Stack>
        </Stack>
      </Stack>
    </Container>
    </div>
  );
};

export default About;