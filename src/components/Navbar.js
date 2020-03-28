import React, { useState } from 'react'
import styled from 'styled-components'
import help from './../assets/help.svg'
import create from './../assets/new.svg'
import payment from './../assets/payment.svg'
import profile from './../assets/profile.svg'
import exit from './../assets/exit.svg'
import Logo from './templates/Logo'
import menu from './../assets/menu.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container open={menuOpen}>
      <Logo style={{ margin: '15px auto' }}>kztest</Logo>
      <Menu src={menu} onClick={() => setMenuOpen(!menuOpen)} />
      <Links>
        <Link>
          <img src={profile} /> Профиль
        </Link>
        <Link>
          <img src={create} /> Новый тест
        </Link>
        <Link>
          <img src={payment} /> Оплата
        </Link>
        <Link>
          <img src={help} /> Помощь
        </Link>
        <Link>
          <img src={exit} /> Выход
        </Link>
      </Links>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 210px;
  z-index: 999;
  grid-area: nav;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  height: 100vh;
  transition: 0.3s;
  overflow: hidden;
  padding-top: 15px;
  border-right: 2px solid #f5f6fa;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: ${props => (props.open ? '325px' : '70px')};
    align-items: flex-start;
    border-bottom: 1px solid #f5f6fa;
    box-shadow: 0px 4px 25px rgba(186, 197, 209, 0.31);
    padding-top: 0;
    border-right: none;
  }
`
const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`
const Link = styled.a`
  color: #8b93b3;
  font-weight: bold;
  font-size: 14px;
  padding: 15px 20px;
  width: 100%;
  :hover {
    color: #32323a;
    text-decoration: none;
  }
  img {
    width: 25px;
    height: 25px;
    position: relative;
    margin: 0 10px -7px 0;
  }
`
const Menu = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 0px;
  top: -5px;
  box-sizing: content-box;
  padding: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export default Navbar
