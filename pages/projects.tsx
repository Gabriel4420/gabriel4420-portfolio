/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'

import Head from 'next/head'

import { Flex, Link } from '@chakra-ui/react'

import { getAllProjects } from '@/services/datocms'

import { ProjectScreen } from '@/components/template'

const Project: NextPage = ({ allProjects }: any) => {
  return (
    <Flex direction="column">
      <Head>
        <title>Gabriel Rodrigues Perez - Projetos</title>
        <meta name="description" content="meus projetos online" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ProjectScreen projects={allProjects} />

      <Link
        href="https://wa.me/5517992560812?text=Ol%C3%A1%20Gabriel%20Rodrigues%20Perez%2C%20gostei%20demais%20do%20seu%20site%2C%20gostaria%20de%20conversar%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites."
        position="fixed"
        target="_blank"
        rel="noreferrer"
        w="60px"
        h="60px"
        bottom="40px"
        right="40px"
        bgColor="#25d366"
        color="#fff"
        borderRadius="50px"
        textAlign="center"
        fontSize="30px"
        boxShadow="2px 2px 3px #999"
        zIndex={100}
      >
        <i
          className="fa fa-whatsapp my-float"
          style={{ marginTop: '16px' }}
        ></i>
      </Link>
    </Flex>
  )
}

export default Project

export const getStaticProps = async () => {
  //GraphCMS Queries

  const allProjects = await getAllProjects()

  return {
    props: { allProjects },
    revalidate: 10,
  }
}
