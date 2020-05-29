import React from 'react'
import styled from '@emotion/styled'

//Components:
import Separator from '../Figures/Separator'

//Styles:
const BioContainer = styled.section`
  margin-top: 3rem;
  padding: 0 1rem 1rem;
  align-items: center;
  text-align: center;
`

const ImageContainer = styled.figure`
  width: 100%;
`

const Image = styled.img`
  width: 120px;
`

const BioDescription = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BioSpock = styled.img`
  width: 16px;
  margin-left: 0.5rem;
`

const Description = styled.p`
  text-align: center;
  margin-top: 0.5rem;
`

const Bio = () => {
  return (
    <BioContainer>
      <ImageContainer>
        <Image src='barckcode.png'/>
      </ImageContainer>
      <BioDescription>
        <Title>
          <h3>
            Hola!
          </h3>
          <BioSpock src='/icons/spock.svg' />
        </Title>
        <Description>
          Me llamo Cristian y soy Frontend Developer. Actualmente trabajo y resido en Madrid. 🇪🇺
          Pero estoy acostumbrado también a participar en proyectos a distancia. 🌎
          Mis pasiones favoritas son viajar y el buen café. ☕️
        </Description>
      </BioDescription>
      <Separator />
    </BioContainer>
  )
}

export default Bio
