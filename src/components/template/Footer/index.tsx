import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Link,
} from '@chakra-ui/react'

import { FiLinkedin, FiGithub } from 'react-icons/fi'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { Desktop, Mobile } from '@/components/index'

import Logo from '@/components/atoms/Logo'

export default function Footer() {
  //

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        w="full"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo
            source="/assets/images/Logo.png"
            height="50px"
            width="50px"
            alt="Primeira inicial do nome Gabriel com azul marinho"
          />

          <Flex
            display={{ base: 'none', md: 'flex' }}
            ml={3}
            alignItems="center"
            justifyContent="center"
          >
            <Desktop isFooter />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Link
            href="https://www.linkedin.com/in/gabriel442021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label={'linkedin social network'}>
              <FiLinkedin color="#00839F" size="30px" />
            </IconButton>
          </Link>

          <Link
            href=" https://github.com/Gabriel4420?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label={'linkedin social network'}>
              <FiGithub color="#00839F" size="30px" />
            </IconButton>
          </Link>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Mobile isFooter />
      </Collapse>
      <Flex alignItems="center" justifyContent="center" p="22">
        Develop by{' '}
        <Link
          href="https://github.com/Gabriel4420?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          fontWeight="bold"
        >
          &nbsp;@gabriel4420
        </Link>
      </Flex>
    </Box>
  )
}
