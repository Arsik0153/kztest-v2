import React from 'react'
import styled from 'styled-components'
import Question from './Question'

const Main = ({ test, setTest }) => {
  const changeQuestion = (e, id) => {
    let questionsList = test.questionsList
    questionsList[id].question = e.target.value
    setTest({ ...test, questionsList })
  }

  const changeAnswer = (e, id, index) => {
    let questionsList = test.questionsList
    questionsList[id].answers[index] = e.target.value
    setTest({ ...test, questionsList })
  }

  const changeCorrect = (id, index, e) => {
    let questionsList = test.questionsList
    if (e.target.checked) questionsList[id].correct.push(index)
    else
      questionsList[id].correct = questionsList[id].correct.filter((c) => {
        return c !== index
      })
    setTest({ ...test, questionsList })
  }

  const addAnswer = (id) => {
    let questionsList = test.questionsList
    questionsList[id].answers.push('')
    setTest({ ...test, questionsList })
  }

  const addQuestion = () => {
    let questionsList = test.questionsList
    questionsList.push({
      question: '',
      answers: ['', '', '', ''],
      correct: [],
    })
    setTest({ ...test, questionsList })
  }

  return (
    <Container>
      <Title>Список вопросов</Title>
      <Body>
        {test.questionsList.map((question, index) => (
          <Question
            question={question}
            changeQuestion={changeQuestion}
            changeAnswer={changeAnswer}
            changeCorrect={changeCorrect}
            addAnswer={addAnswer}
            id={index}
            key={index}
          />
        ))}
        <Button onClick={() => addQuestion()}>Добавить вопрос</Button>
        <Button>Завершить тест</Button>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  padding: 30px 45px 0 45px;
  @media screen and (max-width: 768px) {
    padding: 20px 20px 0 20px;
  }
`
const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`
const Body = styled.div`
  width: 100%;
  margin-top: 25px;
`
const Button = styled.button`
  font-family: 'Montserrat';
  background: #ec6236;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  grid-column: 1 / 6;
  width: fit-content;
  padding: 11px 16px;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  margin: 20px 0 50px 0;
  :hover {
    background: #db582f;
  }
  :last-child {
    margin: 20px 0 50px 15px;
  }
`

export default Main
