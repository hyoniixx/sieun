import React, { useEffect, useReducer, useState } from 'react'

const typingCheck = (state, action) => {
    switch (action.type) {
        case 'TextChange':
            return {
                ...state,
                text: prompt('문자열을 입력해주세요', state.text)
            }
        case 'TimeCheck':
            return {
                ...state,
                time: Date.now()
            }
        case 'AnswerCheck':
            return {
                ...state,
                answer: action.payload
            }
        case 'Finish':
            return {
                text: '',
                answer: '',
                time: 0
            }
        default:
            return {
                ...state
            }
    }
}

function Comp() {
    const [info, dispatch] = useReducer(typingCheck, { text: '', answer: '', time: 0 })

    useEffect(() => {
        dispatch({ type: 'TextChange' })
    }, [])

    useEffect(() => {
        dispatch({ type: 'TimeCheck' })
    }, [info.text])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (info.answer === info.text) {
            alert(`${Date.now() - info.time}(ms)`);
            dispatch({ type: 'Finish' });
        }
    }
    return (
        <>
            <h1>{info.text}</h1>
            {
                info.text &&
                <form onSubmit={handleSubmit}>
                    <input value={info.answer} onChange={(e) => dispatch({ type: 'AnswerCheck', payload: e.target.value })} />
                </form>
            }



        </>
    )
}

export default Comp
