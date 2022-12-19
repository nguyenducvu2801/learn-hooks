
// Lien quan den Redux
// Chuc nang giong useState, su dung cho state phuc tap
// Cach trien khai
// 1. useState
//    - Init state: 0
//    - Actions: Up (sate + 1) / Down (state - 1)
/*
import { useState } from "react";
function UseReducerLesson(){
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Down</button>
            <button onClick={() => setCount(count + 1)}>Up</button>
        </>
    )
}*/
// 1. usereducer
//    - Init state: 0
//    - Actions: Up (sate + 1) / Down (state - 1)
//    - Reducer
//    - Dispatch


import { useReducer, useRef } from "react";
const initState = 0

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

function UseReducerLesson(){
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </>
    )
}

//Example TodoApp
/*import TodoApp from './TodoApp'

function UseReducerLesson() {
    return <TodoApp/>
}*/

export default UseReducerLesson