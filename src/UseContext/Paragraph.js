
//Sử dụng props để truyền
/*function Paragraph(theme) {
    console.log('theme: ', theme)
    return (
        <p className={theme}>
            Context provides a way to pass data through the component tree without having to pass props down manually at every level
        </p>
    )
}*/

// Sử dụng useContext để truyền
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            Context provides a way to pass data through the component tree without having to pass props down manually at every level
        </p>
    )
}
export default Paragraph