import { useRef } from 'react'
import Video from './Video'


// useImperativeHandle: tùy chỉnh ref của function component
//                      thể hiện tính đóng gói
function UseImperativeHandleLesson() {
    const videoRef = useRef()

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }
    return (
        <>
            <Video ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </>
    )
}
export default UseImperativeHandleLesson