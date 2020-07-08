import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

//Services:
import CoverImage from '../Services/CoverImage'

//Styles:
const BioContainer = styled.section`
  margin: 3rem auto 0 auto;
  padding: 0 1rem 0 1rem;
  width: 100%;
  max-width: 768px;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 20% 80%;
  }
`

const ImageContainer = styled.figure`
  width: 140px;
  margin: 0 auto;
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
  padding: 0 2rem;
  text-align: justify;
  @media (min-width: 768px) {
    padding: 0;
  }
`

const Bio = () => {
  return (
    <>
      <BioContainer>
        <ImageContainer>
          <CoverImage src='/barckcode.png' alt='Barckcode picture'/>
        </ImageContainer>
        <BioDescription>
          <BioTitle>
            <h3>
              Hola!
            </h3>
            <BioSpock src='/icons/spock.svg' alt='spock icon'/>
          </BioTitle>
          <Description>
            Me llamo Cristian. Actualmente trabajo y resido en Madrid. 🇪🇺
            Aunque también estoy acostumbrado a participar en proyectos a distancia. 🌎
            Mis pasiones favoritas son viajar y el buen café. ☕️
          </Description>
        </BioDescription>
      </BioContainer>
    </>
  )
}

export default Bio
