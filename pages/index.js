import React from 'react'
import { getAllPosts } from '../lib/Api'

//Components:
import Layout from '../components/Layout/Layout'
import Bio from '../components/Layout/Bio'
import Projects from '../components/Projects'
import ListPosts from '../components/ListPosts'
import Contact from '../components/Contact'

const Home = ({ allPosts }) => {
  const lastPosts = allPosts.filter(post => post.id > 0)

  return (
    <Layout>
      <Bio />
      <ListPosts
        title='> Últimos Posts'
        posts={lastPosts}
      />
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