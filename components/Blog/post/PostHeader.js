import DateFormater from '../../Services/DateFormater'
import CoverImage from '../../Services/CoverImage'
import PostTitle from './PostTitle'

export default function PostHeader({ title, coverImage, date}) {
  return (
    <>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg">
        <DateFormater dateString={date} />
      </div>
    </>
  )
}
