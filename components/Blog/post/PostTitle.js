import styled from '@emotion/styled'

// Styles
const Title = styled.h1`
  margin-top: 1rem;
  @media (min-width: 768px) {
    text-align: center;
  }
`

const PostTitle = ({ children }) => {
  return (
    <Title>
      {children}
    </Title>
  )
}

export default PostTitle