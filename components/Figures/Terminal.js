import React from 'react'
import styled from '@emotion/styled'

//Styles:
const Container = styled.div`
  margin: 3rem 0;
  padding: 1rem;
  border-radius: 25px;
  background-color: #000;
`

const TerminalHeader = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
`

const Circulos = styled.div`
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.5rem;

  &:nth-of-type(1) {
    background-color: #ff0047;
  }

  &:nth-of-type(2) {
    background-color: #ffce00;
  }

  &:nth-of-type(3) {
    background-color: #0bec16;
  }
`

const TerminalContainer = styled.div`
  padding: 0.75rem;
`

const Terminal = ({ children }) => {
  return (
    <Container>
      <TerminalHeader>
        <Circulos></Circulos>
        <Circulos></Circulos>
        <Circulos></Circulos>
      </TerminalHeader>
      <TerminalContainer>
        {children}
      </TerminalContainer>
    </Container>
  )
}

export default Terminal
