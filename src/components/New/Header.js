import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Flex>
      <div className="form">
        <Label>Название теста:</Label>
        <Input type="text" placeholder="Название теста" />
        <Label>Время на выполнение:</Label>
        <Input type="text" placeholder="Количество минут" />
      </div>
      <div className="info">
        <p>Количество вопросов: 4</p>
        <p>Рекомендованное время: 15 мин</p>
      </div>
    </Flex>
  )
}

const Flex = styled.div`
  grid-area: header;
  background: #fff;
  padding: 25px 30px;
  margin: 20px 45px;
  box-shadow: 0px 0px 25px rgba(139, 147, 179, 0.03);
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: 20px 15px;
    margin-top: 90px;
  }

  .form {
    display: grid;
    grid-template-columns: 180px 250px;
    grid-gap: 12px;
    @media screen and (max-width: 530px) {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }

  .info {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    color: #000000;
    text-align: right;
    @media screen and (max-width: 1050px) {
      margin-top: 20px;
    }
  }
`
const Label = styled.label`
  min-width: 300px;
  font-weight: 600;
  font-size: 14px;
  color: #717281;
  margin: 10px 0 7px 0;
  @media screen and (max-width: 530px) {
    grid-column: 1 / 2;
  }
`
const Input = styled.input`
  background: #f1f4fb;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #717281;
  padding: 9px 15px;
  border: 2px solid #f1f4fb !important;
  font-family: 'Montserrat';
  :focus {
    border: 2px solid #ec6236;
  }
  ::placeholder {
    color: #99aac0;
    font-family: 'Montserrat';
    font-weight: 500;
  }
  @media screen and (max-width: 530px) {
    display: block;
    position: relative;
    width: 100%;
  }
`

export default Header
