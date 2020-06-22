import React, { useState } from 'react'
import styled from '@emotion/styled'

// Data:
import firebase from '../../firebase/firebase'

// Components:
import ErrorForm from './ErrorForm'
import SuccessfullForm from './SuccessfullForm'

// Styles:
const Fieldset = styled.fieldset`
  padding: 2rem;
  border-radius: 25px;
  border-width: 3px;
  border-color: #170131;
  background: #fdfdfd;
  box-shadow:  23px 23px 45px #afafaf,
             -23px -23px 45px #ffffff;
`

const Legend = styled.legend`
  font-weight: bold;
  font-size: 1.125rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const Label = styled.label`
  margin-top: 1rem;
  display: block;
  font-weight: 600;
`

const Input = styled.input`
  margin-top: 0.5rem;
  height: 1.5rem;
  width: 100%;
  border-radius: 4px;
  border-color: #000415;
`

const TextTarea = styled.textarea`
  margin-top: 0.5rem;
  padding: 0.5rem;
  height: 8rem;
  width: 100%;
  border-radius: 4px;
  border-width: 2px;
  border-color: #000415;
`

const Button = styled.button`
  margin: 1rem auto 0 auto;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  color: #000415;
  border-color: #000415;
  background: linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% ),
            -webkit-linear-gradient(90deg, #fc5c7d 0%,#6a82fb 100% );

  &:hover {
    background: linear-gradient(90deg, #6a82fb 0%,#fc5c7d 100% ),
            -webkit-linear-gradient(90deg, #6a82fb 0%,#fc5c7d 100% );
  }
`

const ContactForm = () => {

  // States:
  const [ data, setData ] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [ error, setError ] = useState(false) // Validate Form
  const [ successfull, setSuccessfull ] = useState(false) // Validate Form

  // Handle Data State
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const sendMessage = e => {
    e.preventDefault()

    // Validate Data Form
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setError(true)
      return
    }

    // Pass validation
    setError(false)

    // Keep Data in Firestore
    firebase
      .firestore()
      .collection('contacts')
      .add({
        data
      })

    // Successfull Message
    setSuccessfull(true)

    // Reboot Form
    setData({
      name: '',
      email: '',
      message: '',
    })
  }

  // Destructing Data State
  const { name, email, message } = data

  return (
    <form onSubmit={sendMessage}>
      <Fieldset>

        {error ? <ErrorForm text='Datos incorrectos'/> : null}

        <Legend>¿Nos ponemos en contacto?</Legend>

        <Label htmlFor='name'>Nombre/Empresa:</Label>
        <Input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={handleChange}
        />

        <Label htmlFor='email'>Correo:</Label>
        <Input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={handleChange}
        />

        <Label htmlFor='message'>Mensaje:</Label>
        <TextTarea
          placeholder='¿En qué puedo ayudarte?'
          name="message"
          value={message}
          onChange={handleChange}
        />

        <button
          type='submit'
          className='button_link button_button'
        >
          Enviar
        </button>

        {successfull ? <SuccessfullForm /> : null}
      </Fieldset>
    </form>
  )
}

export default ContactForm
