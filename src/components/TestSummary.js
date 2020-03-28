import React from 'react'
import styled from 'styled-components'
import arrow from './../assets/arrow.svg'
import { Link } from 'react-router-dom'

const TestSummary = () => {
  return (
    <Container>
      <Heading>Тесты</Heading>
      <Subtitle>За выбранный период</Subtitle>
      <TestsContainer>
        <Link to={'/test/123'}>
          <Test>
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
const TestsContainer = styled.div`
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
const Test = styled.div`
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
`

export default TestSummary
