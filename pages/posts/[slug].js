import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import styled from '@emotion/styled'

// Libs
import { getPostBySlug, getAllPosts } from '../../lib/Api'
import markdownToHtml from '../../lib/MarkdownToHtml'

// Components
import Layout from '../../components/Layout/Layout'
import PostTitle from '../../components/Blog/post/PostTitle'
import PostHeader from '../../components/Blog/post/PostHeader'
import PostBody from '../../components/Blog/post/PostBody'

// Styles
const ArticleContainer = styled.article`
  margin: 2.75rem auto 0 auto;
  padding: 2rem 1rem;
  border-radius: 25px;
  background: #fdfdfd;
  box-shadow:  23px 23px 45px #afafaf,
             -23px -23px 45px #ffffff;
`

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <ArticleContainer>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </ArticleContainer>
          </>
        )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
