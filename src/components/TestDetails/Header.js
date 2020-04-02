import React from 'react'
import styled from 'styled-components'
import calendar from './../../assets/calendar.svg'

const Header = () => {
  return (
    <Container>
      <Name>История Казахстана</Name>
      <Code>
        Код: <span>3751</span>
      </Code>
      <Code>
        Время на выполнение: <span>15 минут</span>
      </Code>
      <Time>
        03.04.2020
        <img src={calendar} />
      </Time>
    </Container>
  )
}

const Container = styled.div`
  grid-area: header;
  background: #fff;
  padding: 25px 30px;
  margin: 20px 45px;
  box-shadow: 0px 0px 25px rgba(139, 147, 179, 0.03);
  border-radius: 5px;
  position: relative;
  @media (max-width: 768px) {
    margin: 20px 15px;
    margin-top: 90px;
  }
`
const Name = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  margin-bottom: 15px;
`
const Code = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #8e9eb5;
  float: left;
  margin-right: 10px;
  span {
    font-weight: 600;
    font-size: 24px;
    color: #000000;
  }
`
const Time = styled.div`
  background: #ec6236;
  box-shadow: 0px 2px 15px rgba(186, 197, 209, 0.33);
  border-radius: 5px;
  width: 125px;
  height: 30px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  float: right;
`

export default Header
