import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import TopBar from './TopBar'
import TestSummary from './TestSummary'

const Bg = styled.div`
  background: #f5f6fa;
  overflow-x: hidden;
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

const Cabinet = () => {
  return (
    <Bg>
      <Navbar />
      <TopBar />
      <TestSummary />
    </Bg>
  )
}

export default Cabinet
