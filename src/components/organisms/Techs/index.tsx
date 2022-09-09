import { Techs } from '@/interfaces/tech'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import { Carousel, LeftButton, RightButton, Provider } from 'chakra-ui-carousel'
import { FC } from 'react'

const MyTechs: FC<Techs> = ({ techs }: Techs) => {
  return (
    <Flex m="10" alignItems="center" justifyContent="center">
      <Provider>
        <LeftButton />
        <Carousel gap={0}>
          {techs.map((item, index) => (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="center"
              px="10"
            >
              <Image
                src={item.logo.url}
                alt="techs"
                width="100%"
                height="100"
                borderRadius="base"
              />
            </Flex>
          ))}
        </Carousel>

        <RightButton />
      </Provider>
    </Flex>
  )
}

export default MyTechs
