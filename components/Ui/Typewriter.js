import React from 'react'
import styled from '@emotion/styled'

//Styles:
import { writeEffect } from '../Animations'

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
  color: #9F51B6;
`

const Span = styled.span`
  position: absolute;
  right: 0;
  width: 1%;
  text-align: left;
  animation: ${writeEffect} 3s steps(30) 3 alternate;
  color: #9F51B6;
  background: #170131;
`

const Typewriter = ({ message }) => {

  return (
    <Container>
      <Message>
        {message}
        <Span>
          &#9474;
        </Span>
      </Message>
    </Container>
  )
}

export default Typewriter
