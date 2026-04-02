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
      <input type='checkbox' name='독서' checked={hobby[0]} onChange={handleCheckedHobby}/><label>📖독서</label>
      <input type='checkbox' name='음악' checked={hobby[1]} onChange={handleCheckedHobby}/><label>🎶음악</label>
      <input type='checkbox' name='운동' checked={hobby[2]} onChange={handleCheckedHobby}/><label>🏋️운동</label>
      <input type='checkbox' name='코딩' checked={hobby[3]} onChange={handleCheckedHobby}/><label>💻코딩</label>
      <h4>🎈선택된 취미🎈</h4>
      <p>{hobby.join(',')}</p>
      
    </>
  )
}

export default Hobby
