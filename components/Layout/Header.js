import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

//Components:
import Typewriter from '../Ui/Typewriter'
import ListSocial from '../Social/SocialList'

//Styles:
const Header = styled.header`
  text-align: left;
  padding: 2rem 1rem 2rem 1rem;
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
  background-color: #170131;

  @media (min-width: 768px) {
    text-align: center;
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
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
  )
}

export default Home