import Link from 'next/link'

//Services:
import DateFormater from '../Services/DateFormater'
import CoverImage from '../Services/CoverImage'

//Styles:
import { Container, Title, DateText, Description } from './Styles'

const PostCard = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {

  return (
    <Container>
      <CoverImage
        slug={slug}
        title={title}
        src={coverImage} />
      <Title>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </Title>
      <DateText>
        <DateFormater dateString={date} />
      </DateText>
      <Description>{excerpt}</Description>
    </Container>
  )
}

export default PostCard