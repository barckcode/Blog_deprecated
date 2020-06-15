import React from 'react'
import { getAllPosts } from '../lib/Api'

//Components:
import Layout from '../components/Layout/Layout'
import Bio from '../components/Layout/Bio'
import Projects from '../components/Projects'
import Blog from '../components/LastPosts'

const Home = ({ allPosts }) => {
  const morePosts = allPosts.filter(post => post.id > 1)

  return (
    <Layout>
      <Bio />
      {morePosts.length > 0 && <Blog posts={morePosts} />}
      <Projects />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'id',
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default Home