import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

//Styles:
const Container = styled.div`
  margin-top: 1rem;
	display: table;
  @media (min-width: 768px) {
    margin: 1rem auto 0 auto
  }
`

const Message = styled.h3`
  position: relative;
	float: left;
`

const Span = styled.span`
  position: absolute;
  right: 0;
  width: 0;
  background: #000415;
`

const write = keyframes`
  from {width: 100%}
  to {width: 0}
`

const Typewriter = ({ message }) => {

  return (
    <Container>
      <Message>
        {message}
        <Span
          css={css`
            animation: ${write} 4s steps(30) 3 alternate;
          `}
        >
          &#9474;
        </Span>
      </Message>
    </Container>
  )
}

export default Typewriter
