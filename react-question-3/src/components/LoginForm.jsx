import React, { useEffect, useReducer, useRef } from 'react'

const setLoginInfo = (loginInfo, action) => {
  switch (action.type) {
    case 'CHANGEINPUT':
      return {
        ...loginInfo,
        [action.payload.name]: action.payload.value
      }
    case 'CHANGECHECK':
      return {
        ...loginInfo,
        check: !loginInfo.check
      }

  }
}

function LoginForm() {
  const [loginInfo, dispatch] = useReducer(setLoginInfo, {
    userId: '',
    userPwd: '',
    check: false
  })

  const buttonRef = useRef();
  useEffect(() => {
    console.log(buttonRef.current.disabled)
    if (loginInfo.userId && loginInfo.userPwd) {
      buttonRef.current.disabled = false
    }

  })




  return (
    <>
      <h2>로그인 폼</h2>
      <label>사용자명:</label>
      <input type='text' name='userId' value={loginInfo.userId} onChange={(e) => {
        dispatch({ type: 'CHANGEINPUT', payload: e.target })
      }} /><br />
      <label>비밀번호:</label>
      <input type='password' name='userPwd' value={loginInfo.userPwd} onChange={(e) => {
        dispatch({ type: 'CHANGEINPUT', payload: e.target })
      }} /><br />
      <input type='checkbox' name='check' checked={loginInfo.check} onChange={() => {
        dispatch({ type: 'CHANGECHECK' })
      }} /><label>로그인 상태 유지</label><br />
      <button ref={buttonRef} disabled onClick={() => {

        alert(`로그인 시도! 사용자: ${loginInfo.userId} 기억하기:${loginInfo.check ? '예' : '아니오'}`)
      }}>로그인</button>
    </>
  )
}

export default LoginForm
