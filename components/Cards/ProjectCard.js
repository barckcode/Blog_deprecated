import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

//Services:
import CoverImage from '../Services/CoverImage'

//Styles:
import { Container, Title } from './Styles'

const ProjectLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #000415;
  transition: all 250ms;
  background: linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% ),
            -webkit-linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% );

  &:hover {
    background: linear-gradient(90deg, #6a82fb 0%,#fc5c7d 100% ),
            -webkit-linear-gradient(90deg, #6a82fb 0%,#fc5c7d 100% );
    padding: 0.35rem 1rem 0.65rem 1rem;
    transition: all 250ms;
  }
`

const ProjectCard = ({ image, title, repo, url }) => {
  return (
    <Container>
      <a
        href={url}
        alt={title}
        target='_blank'
        rel='noopener noreferrer'
      >
        <CoverImage src={image} />
        <Title
          css={css`
            margin-bottom: 1.5rem;
          `}
        >
          {title}
        </Title>
      </a>
      <ProjectLink
        href={repo}
        alt={title}
        target='_blank'
        rel='noopener noreferrer'
      >
        Repositorio
      </ProjectLink>
    </Container>
  )
}

export default ProjectCard
