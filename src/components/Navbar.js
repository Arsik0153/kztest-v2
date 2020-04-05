import React, { useState } from 'react'
import styled from 'styled-components'
import help from './../assets/help.svg'
import create from './../assets/new.svg'
import payment from './../assets/payment.svg'
import profile from './../assets/profile.svg'
import exit from './../assets/exit.svg'
import Logo from './templates/Logo'
import menu from './../assets/menu.svg'
import { motion } from 'framer-motion'

const container = {
  visible: {
    delay: 0.01,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container open={menuOpen}>
      <Logo
        style={{ margin: '15px auto' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        kztest
      </Logo>
      <Menu src={menu} onClick={() => setMenuOpen(!menuOpen)} />
      <Links variants={container} initial="hidden" animate="visible">
        <Link variants={item}>
          <img src={profile} /> <span>Профиль</span>
        </Link>
        <Link variants={item}>
          <img src={create} /> <span>Новый тест</span>
        </Link>
        <Link variants={item}>
          <img src={payment} /> <span>Оплата</span>
        </Link>
        <Link variants={item}>
          <img src={help} /> <span>Помощь</span>
        </Link>
        <Link variants={item}>
          <img src={exit} /> <span>Выход</span>
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
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;
  padding-top: 15px;
  border-right: 2px solid #f5f6fa;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: ${(props) => (props.open ? '325px' : '70px')};
    align-items: flex-start;
    border-bottom: 1px solid #f5f6fa;
    box-shadow: 0px 4px 25px rgba(186, 197, 209, 0.31);
    padding-top: 0;
    border-right: none;
  }
`
const Links = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`
const Link = styled(motion.a)`
  color: #8b93b3;
  font-weight: bold;
  font-size: 14px;
  padding: 15px 20px;
  width: 100%;
  :hover {
    color: #32323a;
    text-decoration: none;
    background: #f0f3ff;
    span {
      margin-left: 5px;
      transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
  span {
    transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
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
