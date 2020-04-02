import React from 'react'
import styled from 'styled-components'
import Dropdown from 'react-dropdown'
import arrow from './../../assets/dropdown-arrow.svg'
import Table from './Table'

const Main = () => {
  const options = ['дате выполнения', 'алфавиту']

  const arrowClosed = <DropdownArrow src={arrow} />
  const arrowOpen = <DropdownArrow src={arrow} open />

  const onDropdownChange = () => {
    console.log('change')
  }

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
const Subtitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #8b93b3;
  margin-top: 20px;
`
const Flex = styled.div`
  display: flex;
`
const DropdownArrow = styled.img`
  margin-top: 13px;
  ${props => (props.open ? 'margin-top: 7px; transform: rotate(-180deg)' : '')}
`

export default Main
