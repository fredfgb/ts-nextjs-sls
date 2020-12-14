import React from 'react'
import { Container } from './Styled'
import Head from 'next/head'
import RocketseatLogo from '~/assets/rocketseat.svg'

const CardHome: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}

export default CardHome
export { CardHome }
