import { useContext } from 'react'
import Content from './Content'
import { ThemeContext } from './ThemeContext'
import './UseContext.css'

// Context (CompA => CompC)
// Đơn giản hóa truyền dữ liệu từ comp cha xuống các comp con mà không cần sử dụng props
// CompA => CompB => CompC (cách thông thường)

// theme: dart <=> light

// Sử dụng props để truyền
/*function UseContextLesson(){
    const [theme, setTheme] = useState('dart')
    const toggleTheme = () => {
        setTheme(theme === 'dart' ? 'light' : 'dart')
    }
    return (
        <>
            <button onClick={toggleTheme}>Toogle theme</button>
            <Content theme={theme}/>
        </> 
    )
}*/

// Sử dụng useContext để truyền
// - Create context: tạo context ở compA ôm cả compA
// - Provider: có props là value
// - Consumer: useContext tạo ra ở file con cần nhận dữ liệu


function UseContextLesson() {
    const context = useContext(ThemeContext)

    return (
       
            <>
                <button onClick={context.toggleTheme}>Toogle theme</button>
                <Content/>
            </>
    )
}

export default UseContextLesson