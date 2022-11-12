/* eslint-disable react-hooks/rules-of-hooks */
import { getAllProjects } from '@/services/datocms'
import {
  Box,
  Flex,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from '@chakra-ui/react'
import { Carousel, LeftButton, Provider, RightButton } from 'chakra-ui-carousel'
import { FC } from 'react'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

interface ProjectScreen {
  projects: Array<any>
}

const ProjectScreen: FC<ProjectScreen> = ({ projects }: ProjectScreen) => {


  return (
    <Flex m={{ base: 0, md: 24 }} direction="column">
      <Flex alignItems="center" justifyContent="center">
        <Heading
          mt={{ base: 28, md: 0 }}
          p="18"
          textAlign="center"
          color="#7100B3"
        >
          Meus Projetos
        </Heading>
      </Flex>

      <Flex
        mt={{ base: 5, md: 10 }}
        alignItems="center"
        justifyContent="center"
      >
        <Provider>
          <LeftButton />
          <Carousel gap={3}>
            {projects.map((item, index: number) => (
              <Flex key={index} p={{ base: "3", md: '5' }}>
                <Link
                  href={item.linkDoProjeto}
                  target="_blank"
                  rel="noreferrer"
                  _hover={{color:'blue'}}
                >
                  <Center py={12}>
                    <Box
                      role={'group'}
                      pt={6}
                      p="3"
                      maxW={'330px'}
                      w={'full'}
                      h="450px"
                      bg={useColorModeValue('white', 'gray.800')}
                      boxShadow={'dark-lg'}
                      rounded={'lg'}
                      pos={'relative'}
                      zIndex={1}
                    >
                      <Box
                        rounded={'lg'}
                        mt={-16}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                          transition: 'all .3s ease',
                          content: '""',
                          w: 'full',
                          h: 'full',
                          pos: 'absolute',
                          top: 0,
                          left: 0,
                          backgroundImage: `url(${item.imagemDoProjeto.map(
                            (intern: { url: any }) => intern.url,
                          )})`,
                          filter: 'blur(15px)',
                          zIndex: -1,
                        }}
                        _groupHover={{
                          _after: {
                            filter: 'blur(10px)',
                          },
                        }}
                      >
                        <Image
                          rounded={'3xl'}
                          height={230}
                          width={282}
                          objectFit={'contain'}
                          src={item.imagemDoProjeto.map(
                            (intern: { url: string }) => intern.url,
                          )}
                          alt={item.imagemDoProjeto.map(
                            (intern: { alt: string }) => intern.alt,
                          )}
                        />
                      </Box>
                      <Stack pt={10} align={'center'}>

                        <Heading
                          fontSize={{ base: 'xl', md: '2xl' }}
                          fontFamily={'body'}
                          fontWeight={700}
                          color="#7100B3"
                        >
                          {item.titulo}
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                          <Text fontWeight={400} fontSize={{ base: 'xs', md: 'sm' }}>
                            {item.descriO}
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                  </Center>
                </Link>
              </Flex>
            ))}
          </Carousel>

          <RightButton />
        </Provider>
      </Flex>
    </Flex>
  )
}

export default ProjectScreen

export const getStaticProps = async () => {
  //GraphCMS Queries
  const allProjects = await getAllProjects()

  return {
    props: { allProjects },
    revalidate: 10,
  }
}
