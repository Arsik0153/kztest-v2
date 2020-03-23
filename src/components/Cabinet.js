import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import TopBar from './TopBar'

const Bg = styled.div`
  background: #f5f6fa;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Cabinet = () => {
  return (
    <Bg>
      <Navbar />
      <TopBar />
    </Bg>
  )
}

export default Cabinet
