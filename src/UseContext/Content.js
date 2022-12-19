import Paragraph from './Paragraph'

//Sử dụng props để truyền
/*function Content({theme}) {
    return (
        <div>
            <Paragraph them={theme}/>
        </div>
    )
}*/


// Sử dụng useContext để truyền
function Content() {
    return (
        <div>
            <Paragraph/>
        </div>
    )
}
export default Content