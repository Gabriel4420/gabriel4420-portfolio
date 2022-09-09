import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from '@chakra-ui/react'

import { FOOTER_ITEMS } from '@/helpers/footer'

import { NAV_ITEMS } from '@/helpers/menu'

import { NavItem } from '@/interfaces/nav'

import Dropdown from '../Dropdown'
import { FC } from 'react'

interface Desktop {
  isFooter?: boolean
}

const Desktop: FC<Desktop> = ({ isFooter }: Desktop) => {
  //

  const linkColor = useColorModeValue('#00839F', '#0AB9DF')
  const linkHoverColor = useColorModeValue('#0AB9DF', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {isFooter ? (
        <>
          {FOOTER_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={10}
                    href={navItem.href ?? '#'}
                    fontSize={'sm'}
                    fontWeight={800}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                    textTransform="uppercase"
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={'xl'}
                    minW={'sm'}
                  >
                    <Stack>
                      {navItem.children.map(
                        (child: JSX.IntrinsicAttributes & NavItem) => (
                          <Dropdown key={child.label} {...child} />
                        ),
                      )}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </>
      ) : (
        <>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={10}
                    href={navItem.href ?? '#'}
                    fontSize={'sm'}
                    fontWeight={800}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                    textTransform="uppercase"
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={'xl'}
                    minW={'sm'}
                  >
                    <Stack>
                      {navItem.children.map(
                        (child: JSX.IntrinsicAttributes & NavItem) => (
                          <Dropdown key={child.label} {...child} />
                        ),
                      )}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </>
      )}
    </Stack>
  )
}

export default Desktop
