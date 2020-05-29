import React from 'react'
import styled from '@emotion/styled'

//Styles:
const SocialImage = styled.img`
  width: 30px;
  margin-right: 0.5rem;
`

const SocialItem = ({ image, url }) => {
  return (
    <figure>
      <a
        href={url}
        alt='Social Media Link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <SocialImage src={image} alt='Social Media Image' />
      </a>
    </figure>
  )
}

export default SocialItem
