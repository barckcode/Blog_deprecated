import styled from '@emotion/styled'

//Components:
import PostCard from './Cards/PostCard'

//Styles:
const Container = styled.section`
  margin-top: 3rem;
  padding: 0 2rem;
`
const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  margin-top: 2rem;
`

const GridPosts = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`

const Blog = ({ posts }) => {
  return (
    <Container>
      <Title>
        > Últimos Posts
      </Title>
      <GridPosts>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </GridPosts>
    </Container>
  )
}

export default Blog