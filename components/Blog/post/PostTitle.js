import styled from '@emotion/styled'

// Styles
const Title = styled.h1`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.75rem;
`

const PostTitle = ({ children }) => {
  return (
    <Title>
      {children}
    </Title>
  )
}

export default PostTitle