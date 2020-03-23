import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './templates/Container'
import heroImg from './../assets/hero.png'
import quote from './../assets/quote.svg'
import waiting from './../assets/waiting.png'
import Modal from 'react-modal'
import close from './../assets/close.svg'

Modal.setAppElement('#root')

const Landing = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.1)'
    },
    content: {
      width: 'calc(100% - 20px)',
      maxWidth: '500px',
      margin: '0 auto'
    }
  }
  return (
    <>
      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={() => setIsRegisterModalOpen(false)}
        contentLabel={'Регистрация'}
        style={customStyles}
      >
        <ModalTitle>Регистрация</ModalTitle>
        <ModalClose src={close} onClick={() => setIsRegisterModalOpen(false)} />
        <Form>
          <Label>Ваше имя и фамилия:</Label>
          <InputGroup>
            <Input type="text" placeholder="Имя" />
            <Input type="text" placeholder="Фамилия" />
          </InputGroup>
          <Label>Ваш e-mail:</Label>
          <Input type="email" placeholder="example@example.com" />
          <Label>Введите пароль:</Label>
          <Input type="password" placeholder="" />
          <Label>Введите пароль еще раз:</Label>
          <Input type="password" placeholder="" />
        </Form>
        <CTA style={{ marginBottom: '0', marginTop: '15px' }}>
          Зарегистрироваться
        </CTA>
      </Modal>
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={() => setIsLoginModalOpen(false)}
        contentLabel={'Войти'}
        style={customStyles}
      >
        <ModalTitle>Вход</ModalTitle>
        <ModalClose src={close} onClick={() => setIsLoginModalOpen(false)} />
        <Form>
          <Label>Ваш e-mail:</Label>
          <Input type="email" placeholder="example@example.com" />
          <Label>Введите пароль:</Label>
          <Input type="password" placeholder="" />
        </Form>
        <CTA style={{ marginBottom: '0', marginTop: '15px' }}>
          Авторизоваться
        </CTA>
      </Modal>
      <Container>
        <Navbar>
          <Logo href="">kztest</Logo>
          <MenuContainer>
            <MenuLink href="">Отзывы</MenuLink>
            <MenuLink href="">Функции</MenuLink>
            <MenuLink href="">Безопасность</MenuLink>
            <MenuLink href="">Тарифы</MenuLink>
            <MenuLink
              href=""
              onClick={e => {
                e.preventDefault()
                setIsLoginModalOpen(true)
              }}
            >
              Войти
            </MenuLink>
            <RegistrationButton onClick={() => setIsRegisterModalOpen(true)}>
              Регистрация
            </RegistrationButton>
          </MenuContainer>
        </Navbar>
        <Hero>
          <HeroText>
            Превращаем тестирование в быстрый и удобный инструмент
          </HeroText>
          <SubText>
            Одна платформа, которая изменит весь подход к тестированию и
            взаимодействиям с учениками навсегда.
          </SubText>
          <CTA>Попробовать 7 дней бесплатно</CTA>
        </Hero>
        <Trust>
          <CardsContainer>
            <Card>
              <img src={quote} alt="" />
              <CardText>
                Очень удобный сервис. Ученики стали охотно готовиться и делать
                тесты, их эффективность выросла в разы.
              </CardText>
              <CardAuthor>Steve Jobs</CardAuthor>
              <AuthorJob>Apple CEO</AuthorJob>
            </Card>
          </CardsContainer>
          <TrustTextContainer>
            <HeroText>Нам доверяют</HeroText>
            <TrustHeroText>
              Практически каждый пользователь, который пользовался нашим
              сервисом, оставил положительный отзыв.{' '}
              <a href="">Присоединяйся!</a>
            </TrustHeroText>
          </TrustTextContainer>
        </Trust>
        <Functions>
          <ImageOnDesktop src={waiting} />
          <FunctionTexts>
            <HeroText>
              Анализ вопросов, статистика учеников в реальном времени
            </HeroText>
            <SubText>
              Забудьте про перебирание бумаг, сравнивание ответов. Отныне вы
              инструментом, который поможет моментально проверять тесты, делать
              статистику учеников и экономить ваше время. И всё это без вашего
              участия.
            </SubText>
            <CTA>Попробовать функцию</CTA>
          </FunctionTexts>
        </Functions>
      </Container>
    </>
  )
}

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
const Logo = styled.a`
  font-weight: 600;
  font-size: 28px;
  color: #ec6236;
  margin-top: 5px;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`
const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MenuLink = styled.a`
  overflow: hidden;
  font-weight: 600;
  font-size: 14px;
  color: #9ea6c1;
  text-decoration: none;
  margin-right: 15px;
  transition: 0.1s;
  :hover {
    color: #1c303e;
    transition: 0.2s;
    text-decoration: none;
  }
  :last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    :nth-child(1),
    :nth-child(2),
    :nth-child(3),
    :nth-child(4) {
      display: none;
    }
  }
`
const RegistrationButton = styled.button`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  color: #ec6236;
  padding: 13px 20px;
  background: none;
  border: 2px solid #ec6236;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    transition: 0.2s;
    background: #ec6236;
    color: white;
  }
`
const Hero = styled.div`
  padding-top: 70px;
  @media screen and (min-width: 992px) {
    background: url(${heroImg}) no-repeat right bottom;
  }
`
const HeroText = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: #210b04;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`
const SubText = styled.p`
  max-width: 470px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #8e9eb5;
  margin-top: 20px;
`
const CTA = styled.button`
  width: fit-content;
  font-family: 'Montserrat';
  padding: 17px 12px;
  background: #ec6236;
  box-shadow: 0px 0px 15px rgba(236, 98, 54, 0.56);
  border-radius: 5px;
  margin-top: 50px;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: 2px solid #ec6236;
  transition: 0.1s;
  margin-bottom: 40px;
  :hover {
    background: #ffffff;
    color: #ec6236;
    transition: 0.2s;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`
const Trust = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`
const CardsContainer = styled.div``
const Card = styled.div`
  background: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 4px 15px rgba(186, 197, 209, 0.4);
  border-radius: 5px;
  z-index: 1;
`
const CardText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4d5d74;
  margin: 15px 0;
`
const CardAuthor = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin-bottom: 5px;
`
const AuthorJob = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #8e9eb5;
`
const TrustTextContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 25px;
    border-left: 2px solid #ec6236;
  }
  padding: 20px 15px;
`
const TrustHeroText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #8e9eb5;
  margin-top: 15px;
`
const ImageOnDesktop = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Functions = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  margin-top: 50px;
`
const FunctionTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 10px;
  }
`
const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin-bottom: 10px;
`
const Form = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  min-width: 300px;
  font-weight: 500;
  font-size: 14px;
  color: #717281;
  margin: 15px 0 7px 0;
`
const Input = styled.input`
  background: #f1f4fb;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #99aac0;
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
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    ${Input}:first-child {
      margin-right: 5px;
    }
    ${Input}:last-child {
      margin-left: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    ${Input} {
      width: 100%;
    }
    ${Input}:last-child {
      margin-top: 10px;
    }
  }
`
const ModalClose = styled.img`
  position: absolute;
  right: 30px;
  cursor: pointer;
  padding: 15px;
  top: 10px;
`

export default Landing
