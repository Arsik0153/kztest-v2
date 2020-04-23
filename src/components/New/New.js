import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from './../Navbar'
import Header from './Header'
import Main from './Main'

const New = () => {
  const [test, setTest] = useState({
    name: '',
    duration: '',
    code: Math.floor(1000 + Math.random() * 9000),
    questionsList: [
      {
        question: '',
        answers: ['', '', '', ''],
        correct: [],
      },
    ],
  })

  useEffect(() => {
    console.log(test)
  }, [test])

  return (
    <Bg>
      <Navbar />
      <Header test={test} setTest={setTest} />
      <Main test={test} setTest={setTest} />
    </Bg>
  )
}

const Bg = styled.div`
  background: #f5f6fa;
  display: grid;
  grid-template-areas:
    'nav header'
    'nav main';
  grid-template-columns: 210px 1fr;
  @media screen and (max-width: 768px) {
    grid-template-areas:
      'nav nav'
      'header header'
      'main main';
  }
`

export default New
