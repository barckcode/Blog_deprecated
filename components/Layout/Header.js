import React from 'react'
import styled from '@emotion/styled'

//Components:
import ListSocial from '../Social/SocialList'
import Typewriter from '../Animations/Typewriter'

//Styles:
const Header = styled.header`
  text-align: left;
  padding-top: 2rem;
  padding-left: 1rem;
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

const Separator = styled.div`
  margin-top: 1rem;
  width: 100%;
  border-bottom: 1px solid;
  opacity: .5;
`

const Home = () => {
  return (
    <Header>
      <Title>BarckCode</Title>
      <Typewriter
        message={'Bienvenidx a mi website!🙋🏾‍♂️'}
      />
      <ListSocial />
    <Separator />
    </Header>
  )
}

export default Home