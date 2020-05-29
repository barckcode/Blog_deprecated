import React from 'react'
import styled from '@emotion/styled'

//Components:
import SocialItem from './SocialItem'

//Styles:
const SocialContainer = styled.nav`
  display: flex;
  margin-top: 1rem;
`


const SocialList = () => {

  const socialMedia = [
    {
      image: 'github.svg',
      url: 'https://github.com/BarckCode'
    },
    {
      image: 'twitter.svg',
      url: 'https://twitter.com/barckcode'
    },
    {
      image: 'linkedin.svg',
      url: 'https://www.linkedin.com/in/barckcode/'
    },
    {
      image: 'instagram.svg',
      url: 'https://www.instagram.com/_barckcode/'
    },
  ]

  return (
    <SocialContainer>
    {socialMedia.map(social => (
      <SocialItem
        key={social.image}
        image={`/social/${social.image}`}
        url={social.url}
      />
    ))}
    </SocialContainer>
  )
}

export default SocialList
