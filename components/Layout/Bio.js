import React from 'react'
import styled from '@emotion/styled'

//Styles:
const Container = styled.section`
  margin-top: 3rem;
  padding-left: 1rem;
  align-items: center;
`

const ImageContainer = styled.figure`
  width: 100%;
`

const Image = styled.img`
  width: 100px;
  margin: 0 auto;
`

const Bio = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src='barckcode.png'/>
      </ImageContainer>
      <h3>
        Hola!
      </h3>
      <p>Me llamo Cristian y soy Frontend Developer.</p>
    </Container>
  )
}

export default Bio
