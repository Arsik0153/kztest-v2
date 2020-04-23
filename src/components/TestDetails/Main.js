import React from 'react'
import styled from 'styled-components'
import Table from './Table'

const Main = () => {
  return (
    <Container>
      <Title>Список результатов</Title>
      <Table />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  margin: 20px 45px;
  @media (max-width: 768px) {
    margin: 20px 15px;
  }
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`

export default Main
