import React from 'react'
import { css } from '@emotion/core'

//Services:
import CoverImage from '../Services/CoverImage'

//Styles:
import { Container, Title } from './Styles'

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
      <a
        href={repo}
        alt={title}
        target='_blank'
        rel='noopener noreferrer'
        className='button_link'
      >
        Repositorio
      </a>
    </Container>
  )
}

export default ProjectCard
