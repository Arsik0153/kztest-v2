import React from 'react'
import styled from 'styled-components'
import arrow from './../assets/arrow.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import plus from './../assets/plus.svg'

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
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

const TestSummary = () => {
  return (
    <Container>
      <Heading>Тесты</Heading>
      <Subtitle>За выбранный период</Subtitle>
      <TestsContainer variants={container} initial="hidden" animate="visible">
        <Link to={'/new'}>
          <Test variants={item}>
            <Plus src={plus} />
          </Test>
        </Link>
        <Link to={'/test/123'}>
          <Test variants={item} plus>
            <TestTitle>Казахский язык 2 тест</TestTitle>
            <CodeTitle>Код:</CodeTitle>
            <Code>4502</Code>
            <Next>
              <img src={arrow} />
            </Next>
          </Test>
        </Link>
      </TestsContainer>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  padding: 30px 45px 0 45px;
`
const Heading = styled.h2`
  font-weight: 600;
  font-size: 28px;
  color: #000000;
`
const Subtitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #8e9eb5;
  margin-top: 12px;
`
const TestsContainer = styled(motion.div)`
  margin: -10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Next = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70px;
  height: 0px;
  background: #ec6236;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;
  border-top-left-radius: 7px;
  img {
    width: 25px;
  }
`
const TestTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`
const CodeTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #8e9eb5;
  margin-top: 30px;
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`
const Code = styled.h1`
  font-weight: bold;
  font-size: 36px;
  color: #12121c;
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`
const Plus = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`
const Test = styled(motion.div)`
  width: 320px;
  margin: 10px;
  background: #fff;
  min-height: 164px;
  box-shadow: 0px 4px 25px rgba(186, 197, 209, 0.31);
  border-radius: 7px;
  padding: 20px 30px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  :hover {
    box-shadow: 0px 4px 25px rgba(186, 197, 209, 0.61);
    transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    ${Next} {
      height: 40px;
    }
    ${CodeTitle} {
      transform: translateX(15px);
      transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    ${Code} {
      transform: translateX(25px);
      transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    ${TestTitle} {
      transform: translate(10px, 5px);
      transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
  ${(props) =>
    !props.plus &&
    `border: 2px solid #FD7602; box-shadow: 0px 0px 15px rgba(236, 98, 54, 0.3); :hover{box-shadow: 0px 0px 15px rgba(236, 98, 54, 0.7);}`}
`

export default TestSummary
