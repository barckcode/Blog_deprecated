import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0.5rem;
  text-align: center;
  border-radius: 10px;
  background-color: #ff0004;
  @media (min-width: 768px) {
    width: 50%;
  }
`

const ErrorForm = ({ text }) => {
  return (
    <Container>
      <h3>{text}</h3>
    </Container>
  )
}

export default ErrorForm
