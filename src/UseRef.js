import {useRef, useState, useEffect} from 'react'

// Lưu các giá trị qua một tham chiếu bên ngoài function component
// Cú pháp: const ref = useRef(initialValue)
//          Giá trị initialValue chỉ chạy lần đầu không chạy lại khi re-render
//          Trả lại ref là một object có properties là current
function UseRefLesson(){
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    console.log(count, prevCount.current)
    return (
        <>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default UseRefLesson