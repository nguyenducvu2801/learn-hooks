import {useCallback, useState} from 'react'
import Content from './Hoc_content'
// 1. HOC: Higher Order Component
//    Xử lý khi componet cha render nhưng không muốn component con render
//    Khi component con có ít nhất 1 prop thay đổi thì cũng bị re-render
// 2. useCallback()
//    - Reference types
//    - React memo()
//    Sử dụng trong trường hợp component con dù có memo nhưng vẫn bị re-render
function UseCallbackLesson(){
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])
    return (
        <>
            <Content onIncrease={handleIncrease}/>
            <h1>{count}</h1>
            
        </>
    )
}

export default UseCallbackLesson