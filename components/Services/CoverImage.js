import Link from 'next/link'
import styled from '@emotion/styled'


//Styles
import { fadeInKeyframes } from '../Animations'

const Image = styled.img`
  width: 100%;
  border-radius: 25px;
  animation: 1s ${fadeInKeyframes} ease;
`


export default function CoverImage({ title, src, slug }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
    />
  )

  return (
    <div>
      {slug
        ?
          (
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a aria-label={title}>{image}</a>
            </Link>
          )
        :
          (
            image
          )
      }
    </div>
  )
}
