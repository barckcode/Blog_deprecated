import React from 'react'
import { getAllPosts } from '../lib/Api'

//Components:
import Layout from '../components/Layout/Layout'
import ListPosts from '../components/ListPosts'

const Posts = ({ allPosts }) => {
  return (
    <Layout>
      <ListPosts
        title='> Posts'
        posts={allPosts}
      />
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

export default Posts
