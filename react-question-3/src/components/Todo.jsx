import React, { useReducer, useState } from 'react'

const setTodos = (todos, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...todos,
                {
                    check: false,
                    todo: action.payload
                }
            ]
        case 'DELETE':
            return todos.filter((t, index) => {
                return index !== action.payload
            })
        case 'CHECK':
            return todos.map((t, index) => {
                if (index === action.payload) {
                    return {
                        ...t,
                        check: !t.check
                    }
                } else {
                    return {
                        ...t
                    }
                }
            })
    }
}



function Todo() {
    const [todos, dispatch] = useReducer(setTodos, [
        {
            check: false,
            todo: 'React 공부하기'
        },
        {
            check: false,
            todo: '운동하기'
        }
    ])

    const [inputValue, setInputValue] = useState('')


    return (
        <>
            <h2>할 일 목록</h2>
            <input placeholder='새 할 일' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            <button onClick={() => { dispatch({ type: 'ADD', payload: inputValue }); setInputValue('') }}>추가</button>
            {todos.map((t, index) => {
                return <div key={index} style={{ display: 'flex', margin: 2 }}>
                    <input type='checkbox' checked={t.check} onChange={() => { dispatch({ type: 'CHECK', payload: index }) }} />
                    {!t.check ? <span>{t.todo}</span> : <s>{t.todo}</s>}
                    <button onClick={() => { dispatch({ type: 'DELETE', payload: index }) }}>삭제</button>
                </div>
            })}
        </>
    )
}

export default Todo
