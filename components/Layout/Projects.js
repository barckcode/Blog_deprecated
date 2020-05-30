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

const Projects = () => {

  return (
    <Terminal>
      <Title>> Proyectos</Title>
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
    </Terminal>
  )
}

export default Projects
