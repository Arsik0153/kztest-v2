import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
  grid-area: header;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 30px 40px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`
const Name = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #252633;
`
const BarInnerFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 25px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`
const BarInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Badge = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: rgba(3, 23, 52, 0.51);
  margin-right: 30px;
  line-height: 24px;
  span {
    font-weight: 600;
    font-size: 13px;
    color: #fff;
    padding: 3px 12px;
    background: ${props => (props.blue ? '#4E55FE' : '#FD7602')};
    width: fit-content;
    border-radius: 5px;
    margin-right: 7px;
  }
  @media (max-width: 768px) {
    margin: 10px 30px 0px 0;
  }
`
const EditButton = styled.button`
  font-family: 'Montserrat';
  width: fit-content;
  font-weight: 600;
  font-size: 14px;
  color: #aab6c9;
  background: #fff;
  border: none;
  padding: 5px 15px;
  box-shadow: 0px 2px 15px rgba(186, 197, 209, 0.33);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  :hover {
    box-shadow: 0px 2px 20px rgba(186, 197, 209, 0.53);
  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Payment = styled.div`
  width: fit-content;
  border: 2px solid rgba(186, 197, 209, 0.39);
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`
const PaymentStatus = styled.div``
const PaymentDays = styled.div`
  white-space: nowrap;
  font-size: 18px;
  color: #a1b0c1;
  font-weight: 500;
  span {
    color: #ec6236;
    font-weight: bold;
  }
`
const Progress = styled.div`
  margin-top: 5px;
  background-color: #bac5d1;
  div {
    background-color: #ec6236;
    width: 70%;
    height: 5px;
    border-radius: 10px;
  }
`
const Add = styled.a`
  width: 27px;
  height: 27px;
  color: #ec6236;
  border: 2px solid #ec6236;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background: #ec6236;
    color: #fff;
    text-decoration: none;
  }
`

const TopBar = () => {
  return (
    <Flex>
      <BarInnerFlex>
        <Avatar src="https://sun9-23.userapi.com/c858128/v858128637/acc84/crp-NfWN9g0.jpg" />
        <BarInfo>
          <Name>Сайранбеков Жанарыс</Name>
          <BadgeContainer>
            <Badge>
              <span>12</span>Тестов создано
            </Badge>
            <Badge blue>
              <span>161</span>Пользователей прошли тест
            </Badge>
          </BadgeContainer>
          <EditButton>Редактировать профиль</EditButton>
        </BarInfo>
      </BarInnerFlex>
      <Right>
        <Payment>
          <PaymentStatus>
            <PaymentDays>
              <span>14 дней</span> оплачено
            </PaymentDays>
            <Progress>
              <div></div>
            </Progress>
          </PaymentStatus>
          <Add>+</Add>
        </Payment>
      </Right>
    </Flex>
  )
}

export default TopBar
