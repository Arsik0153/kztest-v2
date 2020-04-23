import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import _uniqueId from 'lodash/uniqueId'

const Question = React.memo(
  ({
    question,
    changeQuestion,
    changeAnswer,
    changeCorrect,
    addAnswer,
    id,
  }) => {
    return (
      <Container>
        <Tab>1</Tab>
        <Label>Вопрос:</Label>
        <Input
          type="text"
          placeholder="Вопрос"
          value={question.question}
          onChange={(e) => changeQuestion(e, id)}
        />
        {question.answers.map((answer, index) => {
          let uniqid = _uniqueId('prefix-')
          return (
            <Fragment key={index}>
              <Label>Вариант {index + 1}:</Label>
              <Input
                type="text"
                placeholder={`Вариант ${index + 1}`}
                value={question.answers[index]}
                onChange={(e) => changeAnswer(e, id, index)}
              />
              <Checkbox
                className="styled-checkbox"
                id={uniqid}
                type="checkbox"
                value="value1"
                checked={question.correct.includes(index)}
                onChange={(e) => changeCorrect(id, index, e)}
              />
              <label htmlFor={uniqid}></label>
            </Fragment>
          )
        })}
        <Button onClick={() => addAnswer(id)}>Добавить вариант</Button>
      </Container>
    )
  }
)

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(139, 147, 179, 0.18);
  border-radius: 5px;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 2fr 30px;
  position: relative;
  margin: 20px 0;
`
const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin: 10px 0 7px 0;
  grid-column: 1 / 2;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 6;
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
  grid-column: 2 / 3;
  margin-bottom: 10px;
  :focus {
    border: 2px solid #ec6236;
  }
  ::placeholder {
    color: #99aac0;
    font-family: 'Montserrat';
    font-weight: 500;
  }
  :first-child {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    grid-column: 1 / 4;
  }
`
const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    width: fit-content;
    height: fit-content;
  }
  + label:before {
    margin: 5px 0 0 10px;
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 27px;
    height: 27px;
    background: white;
    border-radius: 5px;
    border: 2px solid #ec6236;
  }
  :disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }
  :disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }
  :checked + label:after {
    margin: 5px 0 0 10px;
    content: '';
    position: absolute;
    left: 7px;
    top: 9px;
    background: white;
    width: 15px;
    height: 8px;
    border-left: 2px solid #ec6236;
    border-bottom: 2px solid #ec6236;
    transform: rotate(-45deg);
  }
`
const Tab = styled.div`
  position: absolute;
  background: #ec6236;
  border-radius: 5px;
  color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 10px;
  :hover {
    background: #db582f;
  }
`

export default Question
