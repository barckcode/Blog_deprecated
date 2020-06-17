import React from 'react'
import { getAllPosts } from '../lib/Api'

//Components:
import Layout from '../components/Layout/Layout'
import Bio from '../components/Layout/Bio'
import Projects from '../components/Projects'
import Blog from '../components/LastPosts'
import Contact from '../components/Contact'

const Home = ({ allPosts }) => {
  const lastPosts = allPosts.filter(post => post.id > 0)

  return (
    <Layout>
      <Bio />
      {lastPosts.length > 0 && <Blog posts={lastPosts} />}
      <Projects />
      <Contact />
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