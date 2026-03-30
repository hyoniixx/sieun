import React, { useState } from 'react'

function ToggleSwitch() {
const [checked, setChecked] = useState({
  content: true,
  dark: false
})

const handleCheckedChange = (e) =>{
setChecked({
  ...checked,
  [e.target.name]:e.target.checked
})
}

  return (
    <>
      <input name='content' type='checkbox' checked={checked.content} onChange={handleCheckedChange}/><label>콘텐츠 표시: {checked.content?'켜짐':'꺼짐'}</label>
      <br></br>
      <input name='dark' type='checkbox' checked={checked.dark} onChange={handleCheckedChange}/><label>다크 모드: {checked.dark?'달':'해'}</label>
    {checked.content?<p>이 메시지는 조건부로 표시됩니다!</p>:<></>}
    </>
  )
}

export default ToggleSwitch
