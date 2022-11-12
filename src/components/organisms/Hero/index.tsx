import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

import { Blob } from '../Blob'

const Hero = () => {
  return (
    <Container maxW="6xl" p="30" mt="-42" id="home">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.5}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
          >
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#BBDE1F',
                zIndex: -1,
              }}
              color="#7100B3"
              textTransform="uppercase"
            >
              Traga a sua ideia
            </Text>
            <br />
            <Text
              as="span"
              color="#7100B3"
              textAlign="center"
              textTransform="uppercase"
            >
              Transformaremos ela em solução para seu negócio!
            </Text>
          </Heading>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Link href="https://h5f480u3isj.typeform.com/to/wj9Makwv" target="_blank" rel="noreferrer">
              <Button
                rounded="xl"
                size="lg"
                fontWeight="bold"
                px={6}
                color="#7100B3"
                variant="outline"
                _hover={{ bg: '#7100B3', color: 'white' }}
                textTransform="uppercase"
              >
                Faça um orçamento
              </Button>
            </Link>

            <Link href="/assets/cv/Curriculum.pdf" download="cv.pdf" target="_blank">
              <Button
                rounded="xl"
                size="lg"
                fontWeight="bold"
                px={6}
                color="#BBDE1F"
                variant="outline"
                _hover={{ bg: '#BBDE1F', color: 'white' }}
                textTransform="uppercase"
              >
                meu curriculum
              </Button>
            </Link>
          </Stack>


        </Stack>
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          <Blob
            w="150%"
            h="150%"
            position="absolute"
            top="-20%"
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />

          <Image
            alt="Hero Image"
            fit="cover"
            align="center"
            w="100%"
            h="100%"
            src="/assets/gifs/art.gif"
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default Hero
