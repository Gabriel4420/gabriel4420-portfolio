/* eslint-disable react-hooks/rules-of-hooks */
import {
  getAllProjects,
  getAllServices,
  getAllTecnologies,
} from '@/services/datocms'
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
  console.log(projects)

  return (
    <Flex m={{ base: 0, md: 24 }} direction="column">
      <Flex alignItems="center" justifyContent="center">
        <Heading
          mt={{ base: 28, md: 0 }}
          p="18"
          textAlign="center"
          color="#00839F"
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
          <Carousel gap={2}>
            {projects.map((item, index: number) => (
              <Flex key={index}>
                <Link
                  href={item.linkDoProjeto}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Center py={12}>
                    <Box
                      role={'group'}
                      p={6}
                      maxW={'330px'}
                      w={'full'}
                      bg={useColorModeValue('white', 'gray.800')}
                      boxShadow={'2xl'}
                      rounded={'lg'}
                      pos={'relative'}
                      zIndex={1}
                    >
                      <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                          transition: 'all .3s ease',
                          content: '""',
                          w: 'full',
                          h: 'full',
                          pos: 'absolute',
                          top: 5,
                          left: 0,
                          backgroundImage: `url(${item.imagemDoProjeto.map(
                            (intern: { url: any }) => intern.url,
                          )})`,
                          filter: 'blur(15px)',
                          zIndex: -1,
                        }}
                        _groupHover={{
                          _after: {
                            filter: 'blur(20px)',
                          },
                        }}
                      >
                        <Image
                          rounded={'lg'}
                          height={230}
                          width={282}
                          objectFit={'cover'}
                          src={item.imagemDoProjeto.map(
                            (intern: { url: string }) => intern.url,
                          )}
                          alt={item.imagemDoProjeto.map(
                            (intern: { alt: string }) => intern.alt,
                          )}
                        />
                      </Box>
                      <Stack pt={10} align={'center'}>
                        <Text
                          color={'gray.500'}
                          fontSize={'sm'}
                          textTransform={'uppercase'}
                        >
                          Brand
                        </Text>
                        <Heading
                          fontSize={'2xl'}
                          fontFamily={'body'}
                          fontWeight={500}
                        >
                          {item.titulo}
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                          <Text fontWeight={200} fontSize={'sm'}>
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
