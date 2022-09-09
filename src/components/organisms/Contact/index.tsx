/* eslint-disable react/no-children-prop */
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from '@chakra-ui/react'
import {
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdOutlineSubject,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson, BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FiLinkedin } from 'react-icons/fi'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmailMessage',
        'template_u5mj8eh',
        e.target,
        'S65jPSw8sTsQbW9YC',
      )
      .then(
        (result) => {
          alert(`${result.text}`)
        },
        (error) => {
          console.log(error.text)
        },
      )

    e.target.reset()
  }
  return (
    <Container
      bg="#fff"
      maxW="full"
      centerContent
      overflow="hidden"
      id="contact"
      mt={{
        base: '20px', // 0-48em
        md: '0', // 48em-80em,
      }}
    >
      <Flex>
        <Box
          bg="#00839F"
          color="white"
          borderRadius="lg"
          m={{ sm: 6, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading
                    textAlign={{ base: 'center', md: 'left' }}
                    p={{ base: 5, md: 0 }}
                  >
                    Contato
                  </Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                    Preencha o formulário abaixo para entrar em contato
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Link
                        href="https://wa.me/5517992560812?text=Ol%C3%A1%20Gabriel%20Rodrigues%20Perez%2C%20gostei%20demais%20do%20seu%20site%2C%20gostaria%20de%20conversar%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites."
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #02054B' }}
                          leftIcon={<BsWhatsapp color="#02054B" size="20px" />}
                        >
                          +55 (17)99256-0812
                        </Button>
                      </Link>

                      <Link
                        target="_blank"
                        href="mailto:gabriel_rodrigues_perez@hotmail.com"
                        rel="noreferrer"
                      >
                        <Button
                          size="md"
                          height="48px"
                          width="100%"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #02054B' }}
                          leftIcon={<MdEmail color="#02054B" size="20px" />}
                        >
                          gabriel_rodrigues_perez@hotmail.com
                        </Button>
                      </Link>
                      <Link
                        href="https://goo.gl/maps/uas8pAjLzLJ7SSnr6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          size="md"
                          height="48px"
                          width="100%"
                          alignItems="center"
                          justifyContent="flex-start"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #02054B' }}
                          leftIcon={
                            <MdLocationOn color="#02054B" size="20px" />
                          }
                        >
                          Mirassol, Brasil
                        </Button>
                      </Link>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 5, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <Link
                      href="https://www.linkedin.com/in/gabriel442021/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#02054B' }}
                        icon={<FiLinkedin size="28px" />}
                      />
                    </Link>
                    <Link
                      href="https://github.com/Gabriel4420?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#02054B' }}
                        icon={<BsGithub size="28px" />}
                      />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  bg="white"
                  borderRadius="lg"
                  w={{ base: '400px', sm: 'max-content' }}
                >
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      {/*  */}
                      <form onSubmit={sendEmail}>
                        <FormControl id="name">
                          <FormLabel>Nome</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" name="name" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="subject">
                          <FormLabel>Assunto</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineSubject color="gray.800" />}
                            />
                            <Input type="text" size="md" name="subject" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="email">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" name="email" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="message">
                          <FormLabel>Mensagem</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="mensagem"
                            name="message"
                          />
                        </FormControl>

                        <FormControl mt="5" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            type="submit"
                          >
                            Enviar
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default Contact
