import styled from '@emotion/styled'

//Styles
const Container = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
  text-align: justify;
`

const PostBody = ({ content }) => {
  return (
    <>
      <Container
        dangerouslySetInnerHTML={{ __html: content }}
        className='post'
      />
    </>
  )
}

export default PostBody