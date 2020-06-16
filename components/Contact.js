import React from 'react'
import styled from '@emotion/styled'

const Container = styled.section`
  margin-top: 3rem;
  padding: 0 2rem;
`

const Fieldset = styled.fieldset`
  border-color: #170131;
  padding: 1rem;
`

const Legend = styled.legend`
  font-weight: bold;
  font-size: 1.25rem;
`

const Label = styled.label`
  display: block;
`

const Contact = () => {
  return (
    <Container>
      <form>
        <Fieldset>
          <Legend>¿Nos ponemos en contacto?</Legend>

          <Label htmlFor='name'>Nombre:</Label>
          <input type='text' id='name' name='name'/>

          <Label htmlFor='email'>Correo:</Label>
          <input type='email' id='email' name='email'/>

          <Label htmlFor='message'>Mensaje:</Label>
          <textarea name="message" placeholder='¿En qué puedo ayudarte?'/>
        </Fieldset>
      </form>
    </Container>
  )
}

export default Contact
