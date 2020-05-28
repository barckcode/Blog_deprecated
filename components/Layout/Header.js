import React from 'react'
import styled from '@emotion/styled'

const Header = styled.header`
  font-family: 'Merienda', cursive;
  text-align: center;
  padding-top: 2rem;
`

const Title = styled.h1`
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
    </Header>
  )
}

export default Home