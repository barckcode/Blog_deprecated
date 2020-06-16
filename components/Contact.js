import React from 'react'
import styled from '@emotion/styled'

//Components:
import ContactForm from './Ui/ContactForm'

//Styles:
const Container = styled.section`
  margin: 3rem auto 0 auto;
  padding: 0 2rem;
  max-width: 500px;
`

const Contact = () => {
  return (
    <Container>
      <ContactForm />
    </Container>
  )
}

export default Contact
