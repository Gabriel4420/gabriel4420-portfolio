import { Flex, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <Flex p="28">
    <Heading fontSize="7xl">Post: {pid?.toString().split('-')}</Heading>
  </Flex>
}

export default Post
