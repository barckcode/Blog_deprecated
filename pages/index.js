import React from 'react'
import { Global, css } from '@emotion/core'

//Components:
import Header from '../components/Layout/Header'
import Bio from '../components/Layout/Bio'
import Projects from '../components/Layout/Projects'
import Footer from '../components/Layout/Footer'

const Home = () => {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Source+Sans+Pro:wght@200;400;600;700&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            color: #b0b8e3;
          }

          body {
            background-color: #000415;
            font-family: 'Source Sans Pro', sans-serif;
          }

          .main {
            max-width: 1024px;
            margin: 0 auto;
          }
        `}
      />
      <main className='main'>
        <Header />
        <Bio />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default Home