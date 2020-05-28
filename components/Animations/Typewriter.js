import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const Container = styled.div`
	margin: auto;
	display: table;
`

const Message = styled.h2`
  position: relative;
	float: left;
`

const Span = styled.span`
  position: absolute;
  right: 0;
  width: 0;
  background: #000;
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
            animation: ${write} 4s steps(30) infinite alternate;
          `}
        >
          |
        </Span>
      </Message>
    </Container>
  )
}

export default Typewriter
