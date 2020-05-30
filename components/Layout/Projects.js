import React from 'react'
import styled from '@emotion/styled'

//Components:
import Terminal from '../Figures/Terminal'
import ProjectCard from '../Cards/ProjectCard'

//Data:
import { projectsList } from '../Services/Data'

//Styles:
const Title = styled.h2`
  text-align: center;
`

const ProjectContainer = styled.section`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`

const Projects = () => {

  return (
    <Terminal>
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
    </Terminal>
  )
}

export default Projects
