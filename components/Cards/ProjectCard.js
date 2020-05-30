import React from 'react'
import styled from '@emotion/styled'

//Styles:
const ProjectContainer = styled.div`
  margin-top: 2rem;
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
  margin-bottom: 1.5rem;
`

const ProjectLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #000415;
  background: linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% ),
            -webkit-linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% );
  transition: all 250ms;

  &:hover {
    background: linear-gradient(90deg, #6a82fb 0%,#fc5c7d 100% ),
            -webkit-linear-gradient(90deg, #6a82fb 0%,#fc5c7d 100% );
    padding: 0.35rem 1rem 0.65rem 1rem;
    transition: all 250ms;
  }
`

const ProjectCard = ({ image, title, repo, url }) => {
  return (
    <ProjectContainer>
      <a
        href={url}
        alt={title}
        target='_blank'
        rel='noopener noreferrer'
      >
        <ProjectImage src={image} />
        <ProjectTitle>{title}</ProjectTitle>
      </a>
      <ProjectLink
        href={repo}
        alt={title}
        target='_blank'
        rel='noopener noreferrer'
      >
        Repositorio
      </ProjectLink>
    </ProjectContainer>
  )
}

export default ProjectCard
