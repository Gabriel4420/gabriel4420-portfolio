import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

const AboutMe = () => {
  return (
    <Flex
      direction="column"
      bgColor="#00839F"
      w="full"
      pb="30"
      color="white"
      id="aboutme"
      transition="ease-in-out"
      transitionDuration="1000"
    >
      <Heading textAlign="center" p="10" textTransform="uppercase">
        Sobre mim
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="full"
        >
          <Image
            src="./assets/images/perfil.jpg"
            alt="foto de perfil"
            w="xs"
            h="xs"
            rounded="full"
          />
        </Box>
        <Box w="full" m="10" p={{ base: '20px', md: '0px' }}>
          <Text p="1" fontFamily="Montserrat">
            Acredito que sempre podemos ir além, basta ter 99% de transpiração e
            1% de inspiração, como já dizia Einstein.
          </Text>
          <Text p="1" fontFamily="Montserrat">
            Sou um grande entusiasta da tecnologia da informação, além de ser formado em analise de
            sistemas pela fatec, fazem aproximadamente 2 anos e meio que estou trabalhando na area.
          </Text>
          <Text p="1" fontFamily="Montserrat">
            Espero contribuir ativamente com todas as minhas habilidades e
            consequentemente gerar valor para seu negocio.
          </Text>
          <Text p="1" fontFamily="Montserrat">
            E nessa jornada louca e cheia de reviravoltas que é a vida, eu busco
            sempre por inovação e conhecimento, além de ajudar o máximo de pessoas que
            puder no meio do caminho.
          </Text>
          <Link href="/projects" target="_blank">
            <Button
              rounded="lg"
              size="lg"
              fontWeight="bold"
              p={6}
              mt="10"
              colorScheme="orange"
              textTransform="uppercase"
            >
              Saiba mais
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default AboutMe
