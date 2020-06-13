import React from 'react'

//Components:
import Layout from '../components/Layout/Layout'
import Bio from '../components/Layout/Bio'
import Projects from '../components/Projects'

//DataBase


const Home = () => {
  return (
    <Layout>
      <Bio />
      <Projects />
    </Layout>
  )
}

export default Home