import React from 'react'
import styled from '@emotion/styled'

//Components:
import Separator from '../Figures/Separator'

//Styles:
const BioContainer = styled.section`
  margin-top: 3rem;
  padding: 0 1rem 0 1rem;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 20% 80%;
  }
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

const BioTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: left;
  }
`

const BioSpock = styled.img`
  width: 16px;
  margin-left: 0.5rem;
`

const Description = styled.p`
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    text-align: justify;
  }
`

const Bio = () => {
  return (
    <>
      <BioContainer>
        <ImageContainer>
          <Image src='barckcode.png'/>
        </ImageContainer>
        <BioDescription>
          <BioTitle>
            <h3>
              Hola!
            </h3>
            <BioSpock src='/icons/spock.svg' />
          </BioTitle>
          <Description>
            Me llamo Cristian y soy Linux SysAdmin. Actualmente trabajo y resido en Madrid. 🇪🇺
            Pero estoy acostumbrado también a participar en proyectos a distancia. 🌎
            Mis pasiones favoritas son viajar y el buen café. ☕️
          </Description>
        </BioDescription>
      </BioContainer>
      <Separator />
    </>
  )
}

export default Bio
