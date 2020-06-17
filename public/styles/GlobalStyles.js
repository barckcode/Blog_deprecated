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

        .link {
          padding: 0.5rem 2rem;
        }

        .link_active {
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
          background-color: ${primary};
        }

        .button_link {
          padding: 0.5rem 1rem;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          color: #000415;
          transition: all 250ms ease;
          background: linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% ),
                    -webkit-linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% );

          &:hover {
            background: linear-gradient(90deg, #6a82fb 0%,#fc5c7d 100% ),
                    -webkit-linear-gradient(90deg, #6a82fb 0%,#fc5c7d 100% );
            padding: 0.35rem 1rem 0.65rem 1rem;
            transition: all 250ms ease;
          }
        }

        .button_button {
          margin: 1rem auto 0 auto;
          display: block;
          border-color: #000415;

          &:hover {
            padding: 0.6rem 1rem 0.4rem 1rem;
          }
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