import React from 'react'
import styled from '@emotion/styled'

//Components:
import ListSocial from '../Social/SocialList'
import Typewriter from '../Animations/Typewriter'
import Separator from '../Figures/Separator'

//Styles:
const Header = styled.header`
  text-align: left;
  padding: 2rem 1rem 0 1rem;

  @media (min-width: 768px) {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'Merienda', cursive;
  font-size: 3rem;
  background: linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% ),
              -webkit-linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Home = () => {
  return (
    <Header>
      <Title>BarckCode</Title>
      <Typewriter
        message={'Bienvenidx a mi website!'}
      />
      <ListSocial />
      <Separator />
    </Header>
  )
}

export default Home