import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

//Components:
import Typewriter from '../Ui/Typewriter'
import ListSocial from '../Social/SocialList'
import Navbar from '../Ui/Navbar'

//Styles:
const Header = styled.header`
  text-align: left;
  padding: 2rem 1rem 2rem 1rem;
  background-color: #170131;

  @media (min-width: 768px) {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'Merienda', cursive;
  font-size: 3rem;
  background: linear-gradient(90deg, #9F51B6 0%, #170131 100% ),
              -webkit-linear-gradient(90deg, #9F51B6 0%, #170131 100% );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Home = () => {
  return (
    <>
      <Header>
        <Link href='/'>
          <a>
            <Title>BarckCode</Title>
          </a>
        </Link>
        <Typewriter
          message={'Bienvenidx a mi website!'}
        />
        <ListSocial />
      </Header>
      <Navbar />
    </>
  )
}

export default Home