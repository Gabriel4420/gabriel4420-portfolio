import { ChevronDownIcon } from '@chakra-ui/icons'

import {
  Collapse,
  Text,
  Flex,
  Icon,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

import { NAV_ITEMS } from '@/helpers/menu'

import { FOOTER_ITEMS } from '@/helpers/footer'

import MobileNavItem from './MobileNavItem'
import { FC } from 'react'

interface Mobile {
  isFooter?: boolean
}

const Mobile: FC<Mobile> = ({ isFooter }: Mobile) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {isFooter ? (
        <>
          {FOOTER_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </>
      ) : (
        <>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </>
      )}
    </Stack>
  )
}

export default Mobile
