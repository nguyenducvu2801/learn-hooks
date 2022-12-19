import {memo} from "react"

// Xử dụng import qua file Hoc_memo.js
/*function Content(){
    console.log('re-render')
    return (
        <h2>HELLO ANH EM F8</h2>
    )
}
export default memo(Content)*/

/*function Content({count}){
    console.log('re-render')
    return (
        <>
            <h2>HELLO ANH EM F8 {count}</h2>
            
        </>
        
    )
}
export default Content*/

// Xử dụng import qua file UseCallback.js
function Content({onIncrease}){
    console.log('re-render')
    return (
        <>
            <h2>HELLO ANH EM F8</h2>
            <button onClick={onIncrease}>UseCallback</button>
        </>
        
    )
}
export default memo(Content)

