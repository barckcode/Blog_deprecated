import React from 'react'
import styled from '@emotion/styled'

//Components:
import Terminal from '../Figures/Terminal'

//Styles:
const Title = styled.h2`
  text-align: center;
`

const CardContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-radius: 25px;
  text-align: center;
  background: #000415;
  box-shadow:  30px 30px 60px #000208;
`

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 25px;
`

const ProjectTitle = styled.h3`
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
`

const ProjectLink = styled.a`
  width: 120px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #000415;
  background: linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% ),
            -webkit-linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% );
  transition: all 4s;

  &:hover {
    background-color: #fc5c7d;
    transition: all 4s;
  }
`

const Projects = () => {
  return (
    <Terminal>
      <Title>> Proyectos</Title>
      <CardContainer>
        <ProjectImage src='/projects/infographics_app.png' />
        <ProjectTitle>Infographics App</ProjectTitle>
        <ProjectLink>Repositorio</ProjectLink>
      </CardContainer>
    </Terminal>
  )
}

export default Projects
