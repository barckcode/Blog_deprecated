import React from 'react'
import { Global, css } from '@emotion/core'

// Styles:
import { fadeInKeyframes } from '../../components/Animations'

export const GlobalStyles = ({ theme }) => {

  const { primary } = theme.colors

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
          color: #170131;
        }

        body {
          background-color: ${primary};
          font-family: 'Source Sans Pro', sans-serif;
        }

        .main {
          max-width: 1024px;
          margin: 0 auto;
        }

        .post {
          h3 {
            margin: 1.5rem 0 0.5rem 0;
            text-align: center;
          }

          .alert,
          h5 {
            font-size: 1rem;
            margin: 0.25rem 0;
          }

          .alert {
            color: red;
          }

          p {
            margin: 0.5rem 0;
          }

          li {
            margin: 0.5rem 0;
          }

          a strong {
            color: #9F51B6;
          }

          img {
            width: 100%;
            max-width: 500px;
            border-radius: 25px;
            margin: 1rem auto;
            display: block;
            animation: 1s ${fadeInKeyframes} ease;
          }

          blockquote {
            width: 100%;
            margin: 0.75rem 0;
          }
        }
      `}
    />
  )
}