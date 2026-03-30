import React, { useState } from 'react'

function UserInfo() {

  const [user, setUser] = useState({
    userName: '홍길동',
    userAge: 25,
    userEmail: 'hong@example.com'
  })

  const handleUserChange = (e) =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  return (
    <>
      <label htmlFor='name'>이름: </label>
      <input id='name' name='userName' type='text' value={user.userName} onChange={handleUserChange}/><br/>
      <label htmlFor='age'>나이: </label>
      <input id='age' name='userAge' type='number' value={user.userAge} onChange={handleUserChange}/><br/>
      <label htmlFor='email'>이메일: </label>
      <input id='email' name='userEmail' type='email' value={user.userEmail} onChange={handleUserChange}/><br/>
      <h4>프로필</h4>
      <p>{user.userName} ({user.userAge}세)</p>
      <p>{user.userEmail}</p>
    </>
  )
}

export default UserInfo
