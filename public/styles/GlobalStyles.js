import React from 'react'
import { Global, css } from '@emotion/core'

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
          color: #001164;
        }

        body {
          background-color: ${primary};
          font-family: 'Source Sans Pro', sans-serif;
        }

        .main {
          max-width: 1024px;
          margin: 0 auto;
        }
      `}
    />
  )
}