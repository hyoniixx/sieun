import React, { useState } from 'react'

function Hobby() {
  const [hobby, setHobby] = useState([])
  
  const handleCheckedHobby = (e) =>{
    if(e.target.checked){
      setHobby([...hobby,e.target.name]);
    }else{
      setHobby(hobby.filter(h=>h!==e.target.name))
    }
    }

  return (
    <>
      <input type='checkbox' name='독서' onChange={handleCheckedHobby}/><label>📖독서</label>
      <input type='checkbox' name='음악' onChange={handleCheckedHobby}/><label>🎶음악</label>
      <input type='checkbox' name='운동' onChange={handleCheckedHobby}/><label>🏋️운동</label>
      <input type='checkbox' name='코딩' onChange={handleCheckedHobby}/><label>💻코딩</label>
      <h4>🎈선택된 취미🎈</h4>
      <p>{hobby.join(',')}</p>
      
    </>
  )
}

export default Hobby
