import { Hero } from '@/components/organisms'
import AboutMe from '@/components/organisms/AboutMe'
import MyServices from '@/components/organisms/MyServices'
import MyTechs from '@/components/organisms/Techs'
import { CardServices } from '@/interfaces/card'

import { getAllTecnologies, getAllServices } from '@/services/datocms'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { FC } from 'react'


interface HomeScreen {
  services: Array<CardServices>
  tecnologies: Array<any>
}

const HomeScreen: FC<HomeScreen> = ({ services, tecnologies }: HomeScreen) => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Box p={{ base: 0, sm: 5, md: 20, lg: 30 }} pt="20" marginBottom="30" id="techs">
        <Heading
          textAlign="center"
          color="#7100B3"
          p={{ base: '0', md: "50" }}
          textTransform="uppercase"
        >
          Minhas Tecnologias
        </Heading>
        <MyTechs techs={tecnologies} />
      </Box>
      <Box p="30" bg="#7100B3" >
        <Heading
          textAlign="center"
          p={{ base: '0', md: "30" }}
          color="white"
          textTransform="uppercase"
        >
          Meus Serviços
        </Heading>
        <Flex
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
          justifyContent="center"
          id="myservices"
          p={{ base: '0', md: "20" }}
        >
          {services.map((item, index) => (
            <MyServices
              key={index}
              title={item.title}
              shortDescription={item.shortDescription}
              url={item.icon.url}
              alt={item.icon.alt}
              icon={undefined}
            />
          ))}
        </Flex>

      </Box>

    </>
  )
}

export default HomeScreen

export const getStaticProps = async () => {
  //GraphCMS Queries
  const allTechnologies = await getAllTecnologies()

  const allServices = await getAllServices()

  return {
    props: { allTechnologies, allServices },
    revalidate: 10,
  }
}
