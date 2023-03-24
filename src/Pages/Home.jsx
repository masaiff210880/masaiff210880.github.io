import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    useBreakpointValue
  } from '@chakra-ui/react';
  import Introduction from '../Components/Introduction';
  import { Type } from '../Components/Type';
  
  export default function Home() {
    return (
      <div id='home'>
        <Container maxW={'4xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 20 }}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}  lineHeight={2}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Hi, I am Ram Surat
              </Text>
              <br />{' '}
              <Text color={'blue.500'} as={'span'} fontSize={{lg:'4xl'}}>
                <Type/>
              </Text>{' '}
            </Heading>
            <Text color={'gray.500'}>
              <Introduction/>
            </Text>
          </Stack>
        </Container>
      </div>
    );
  }