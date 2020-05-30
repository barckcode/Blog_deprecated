import React from 'react'
import styled from '@emotion/styled'

//Components:
import SocialItem from './SocialItem'

//Data:
import { socialMedia } from '../Services/Data'

//Styles:
const SocialContainer = styled.nav`
  display: flex;
  margin-top: 1rem;
`

const SocialList = () => {

  return (
    <SocialContainer>
    {socialMedia.map(social => (
      <SocialItem
        key={social.id}
        image={`/social/${social.image}`}
        url={social.url}
      />
    ))}
    </SocialContainer>
  )
}

export default SocialList
