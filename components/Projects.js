import React from 'react'
import styled from '@emotion/styled'

//Components:
import ProjectCard from './Cards/ProjectCard'

//Data:
import { projectsList } from './Services/Data'

//Styles:
const Container = styled.section`
  margin-top: 3rem;
  padding: 2rem 0.5rem;
  border-radius: 25px;
  background: #fdfdfd;
  box-shadow:  23px 23px 45px #afafaf,
             -23px -23px 45px #ffffff;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
`

const ProjectContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`

const Projects = () => {

  return (
    <Container>
      <Title>> Proyectos</Title>
      <ProjectContainer>
        {
          projectsList.map(project => (
            <ProjectCard
              key={project.id}
              image={`/projects/${project.image}`}
              title={project.title}
              repo={project.repo}
              url={project.url}
            />
          ))
        }
      </ProjectContainer>
    </Container>
  )
}

export default Projects
