import styled from '@emotion/styled'

// Services:
import DateFormater from '../../Services/DateFormater'
import CoverImage from '../../Services/CoverImage'

// Components:
import PostTitle from './PostTitle'

// Styles:
const DateContainer = styled.h5`
  text-align: center;
  margin-top: 0.5rem;
`

const PostHeader = ({ title, coverImage, date}) => {
  return (
    <>
      <div>
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <DateContainer>
        <DateFormater dateString={date} />
      </DateContainer>
    </>
  )
}

export default PostHeader