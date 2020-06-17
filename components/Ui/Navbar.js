import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const Container = styled.nav`
  height: 75px;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  background: linear-gradient(0deg, #9F51B6 0%, #170131 100% ),
              -webkit-linear-gradient(0deg, #9F51B6 0%, #170131 100% );
`

const Navbar = () => {
  const path = useRouter().pathname

  return (
    <Container>
      <Link href='/'>
        <a>
          <h3
            className={`
              link
              ${path === '/' ? 'link_active' : ''}
            `}
          >
            Inicio
          </h3>
        </a>
      </Link>
      <Link href='/posts'>
        <a>
          <h3
            className={`
              link
              ${path === '/posts' ? 'link_active' : ''}
            `}
          >
            Blog
          </h3>
        </a>
      </Link>
    </Container>
  )
}

export default Navbar
