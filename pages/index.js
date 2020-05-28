import React from 'react'
import { Global, css } from '@emotion/core'

import Header from '../components/Layout/Header'
import Terminal from '../components/Figures/Terminal'
import Typewriter from '../components/Animations/Typewriter'

const Home = () => {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Oswald:wght@200;400;600;700&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            color: #b0b8e3;
            background-color: #000415;
            font-family: 'Oswald', sans-serif;
          }

          .main {
            max-width: 1024px;
            margin: 0 auto;
          }
        `}
      />
      <main className='main'>
        <Header />
        <Terminal>
          <Typewriter
            message={'Bienvenidx a mi website!🙋🏾‍♂️'}
          />
        </Terminal>
      </main>
    </>
  )
}

export default Home