import React from 'react'
import Head from 'next/head'

//Components:
import Header from './Header'
import Footer from './Footer'

//Styles:
import { GlobalStyles } from '../../public/styles/GlobalStyles'

//Estas constantes de Theme hay que llevarlas a su propio componente.
const Layout = ({ children }) => {
  const DarkTheme = {
    colors: {
      primary: '#00002b',
    }
  }

  const LightTheme = {
    colors: {
      primary: '#fff',
    }
  }

  return (
    <>
      <Head>
        <html lang="es"/>
        <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Source+Sans+Pro:wght@200;400;600;700&display=swap" rel="stylesheet" />
        <title>BarckCode</title>
      </Head>
      <GlobalStyles
      // Hay que crear un state para manejar esta condición. Y un botón para modificar el state.
        theme={ DarkTheme ? DarkTheme : LightTheme}
      />
      <main className='main'>
        <Header />
          {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout