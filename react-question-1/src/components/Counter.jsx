import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
  return (
    <>
      <p>카운트 : {count}</p>
      <button onClick={()=>{setCount((prev)=>prev-1)}}>-1</button>
      <button onClick={()=>setCount(0)}>초기화</button>
      <button onClick={()=>{setCount((prev)=>prev+1)}}>+1</button>
    </>
  )
}

export default Counter
