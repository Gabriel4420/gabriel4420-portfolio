import Card from '@/components/mols/Card'
import { CardServices } from '@/interfaces/card'
import { Flex } from '@chakra-ui/react'
import { FC } from 'react'

const MyServices: FC<CardServices> = ({
  title,
  alt,
  url,
  shortDescription,
}: CardServices) => {
  return (
    <Flex px={{ base: '0', md: '90px' }}>
      <Card
        title={title}
        shortDescription={shortDescription}
        url={url}
        alt={alt}
        icon={undefined}
      />
    </Flex>
  )
}

export default MyServices
