import React, { useState } from 'react'

function Hobby() {
  const [hobby, setHobby] = useState({
    book:false,
    music: false,
    health: false,
    coding: false
  })
  
  const handleCheckedHobby = (e) =>{
    setHobby({
      ...hobby,
      [e.target.name]: e.target.checked
    })
    }

  return (
    <>
      <input type='checkbox' name='book'/><label>독서</label>
      <input type='checkbox' name='music'/><label>음악</label>
      <input type='checkbox' name='health'/><label>운동</label>
      <input type='checkbox' name='coding'/><label>코딩</label>
      <h4>선택된 취미</h4>
      <p></p>
    </>
  )
}

export default Hobby
