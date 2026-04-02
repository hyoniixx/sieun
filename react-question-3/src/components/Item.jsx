import React, { useState } from 'react'

function Item() {
    const [fruit, setFruit] = useState('')

    const changeFruit = (e) => {
        setFruit(e.target.innerText)
    }
    return (
        <>
            <h2>아이템 선택</h2>
            <button onClick={changeFruit}>사과🍎</button>
            <button onClick={changeFruit}>바나나🍌</button>
            <button onClick={changeFruit}>오렌지🍊</button>
            <button onClick={changeFruit}>포도🍇</button>
            <button onClick={changeFruit}>딸기🍓</button>
            <p>🧺선택된 과일: {fruit ? fruit : '없음'}</p>
            {fruit && <p>{fruit}를 선택하셨습니다!</p>}
        </>
    )
}

export default Item
