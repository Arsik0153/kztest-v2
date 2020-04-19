import React from 'react'
import styled from 'styled-components'
import Navbar from './../Navbar'
import Header from './Header'

const Bg = styled.div`
  background: #f5f6fa;
  display: grid;
  grid-template-areas:
    'nav header'
    'nav main';
  grid-template-columns: 210px 1fr;
  @media screen and (max-width: 768px) {
    grid-template-areas:
      'nav nav'
      'header header'
      'main main';
  }
`

const New = () => {
  return (
    <Bg>
      <Navbar />
      <Header />
    </Bg>
  )
}

export default New
