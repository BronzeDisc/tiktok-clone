import Head from 'next/head'

import styled from 'styled-components'
// import styles from '../../styles/Home.module.css'
import Main from '../components/Main'
import { Contexto } from '../context/context'
// import Image from 'next/image'
// import { useContext } from 'react'

export const Container = styled.div``

export default function Home() {
  // const { state } = useContext(Contexto)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
    </div>
  )
}
