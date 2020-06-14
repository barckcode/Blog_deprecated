import React from 'react'

//Components:
import Layout from '../components/Layout/Layout'
import Bio from '../components/Layout/Bio'
import Projects from '../components/Projects'

const Home = () => {

  return (
    <Layout>
      <Bio />
      <Projects />
    </Layout>
  )
}

export default Home