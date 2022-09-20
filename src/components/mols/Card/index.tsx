/* eslint-disable react-hooks/rules-of-hooks */

import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Heading,
  Image,
  Flex,
} from '@chakra-ui/react'
import { FC } from 'react'
import { CardServices } from '@/interfaces/card'

const Card: FC<CardServices> = ({
  title,
  shortDescription,
  url,
  alt,
}: CardServices) => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Center py={3} borderRadius="3xl">
        <Box
          maxW="300px"
          w="full"
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow="2xl"
          rounded="md"
          p={6}
          overflow="hidden"
        >
          <Box
            borderRightRadius="4xl"
            borderLeftRadius="4xl"
            h="230px"
            bg="gray.100"
            mt={-6}
            mx={-6}
            mb={6}
            pos="relative"
          >
            <Image
              src={url}
              alt={alt}
              w="full"
              h="220px"
              borderRightRadius="4xl"
              borderLeftRadius="4xl"
              objectFit="cover"
            />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize="2xl"
              fontFamily="Montserrat"
            >
              {title}
            </Heading>

            <Text color={'gray.500'} fontSize="xl" fontWeight="300">
              {shortDescription}
            </Text>
          </Stack>
        </Box>
      </Center>
    </Flex>
  )
}

export default Card
