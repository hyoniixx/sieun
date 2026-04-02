import React, { useReducer } from 'react'

const setCal = (cal, action) => {
  switch (action.type) {
    case 'NUM1':
      return {
        ...cal,
        num1: action.payload
      }
    case 'NUM2':
      return {
        ...cal,
        num2: action.payload
      }
  }
}

function Cal() {

  const [cal, dispatch] = useReducer(setCal, {
    num1: 10,
    num2: 5
  })

  const add = () => {
    return cal.num1 + cal.num2
  }

  const minus = () => {
    return cal.num1 - cal.num2
  }

  const rhqgkrl = () => {
    return cal.num1 * cal.num2
  }

  const sksnrl = () => {
    return cal.num1 / cal.num2
  }
  return (
    <>
      <h2>간단한 계산기</h2>
      <label>숫자 1:</label><input type='number' value={cal.num1} onChange={(e) => {
        dispatch({ type: 'NUM1', payload: Number(e.target.value) })
      }} />
      <br />
      <label>숫자 2:</label><input type='number' value={cal.num2} onChange={(e) => {
        dispatch({ type: 'NUM2', payload: Number(e.target.value) })
      }} />
      <p>➕: {cal.num1} + {cal.num2} = {add()}</p>
      <p>➖: {cal.num1} + {cal.num2} = {minus()}</p>
      <p>✖️: {cal.num1} + {cal.num2} = {rhqgkrl()}</p>
      <p>➗: {cal.num1} + {cal.num2} = {sksnrl()}</p>
    </>
  )
}

export default Cal
