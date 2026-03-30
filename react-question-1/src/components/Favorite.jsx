import React, { useState } from 'react'

function Favorite() {

  const [favorite, setFavorite] = useState({
    color: 'blue',
    fruit: 'apple'
  })

  const handleFavoriteChange = (e) =>{
    setFavorite({
      ...favorite,
      [e.target.name]:e.target.value
    })
  }
  return (
    <>
    <select value={favorite.color}  name='color' onChange={handleFavoriteChange}>
        <option value='blue'>💙파란색</option>
        <option value='red'>❤️빨간색</option>
        <option value='green'>💚초록색</option>
        <option value='yellow'>💛노란색</option>
      </select>
      <br/>
      <select value={favorite.fruit} name='fruit' onChange={handleFavoriteChange}>
        <option value='apple'>🍎사과</option>
        <option value='banana'>🍌바나나</option>
        <option value='orange'>🍊오렌지</option>
        <option value='grape'>🍇포도</option>
      </select>
      <p>선택한 색상: {favorite.color}</p>
      <p>선택한 과일: {favorite.fruit}</p>
    </>
  )
}

export default Favorite
