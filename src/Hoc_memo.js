import {useState} from 'react'
import Content from './Hoc_content'
// 1. HOC: Higher Order Component
//    Xử lý khi componet cha render nhưng không muốn component con render
//    Khi component con có ít nhất 1 prop thay đổi thì cũng bị re-render
function MemoLesson(){
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    return ( // Component <Content/> không có prop thay đổi nên cần sử dụng memo
             // để ngăn component con re-render khi component cha re-render
        <>
            <Content/>
            <h1>{count}</h1>
            <button onClick={increase}>Memo</button>
        </>
    )
}
export default MemoLesson

/*function MemoLesson(){
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    return ( // Component <Content/> có prop thay đổi nên không cần sử dụng memo
             // khi đó component cha re-render thì component con cũng re-render 
        <>
            <Content count={count}/>
            <h1>{count}</h1>
            <button onClick={increase}>Memo</button>
        </>
    )
}

export default MemoLesson*/