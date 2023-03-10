import { useState } from 'react';


/*import UseStateLesson from './UseState';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseStateLesson/>}
    </div>
  )
}*/

/*import UseEffectLesson from './UseEffect';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseEffectLesson/>}
    </div>
  )
}*/

/*import UseLayoutEffectLesson from './UseLayoutEffect';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseLayoutEffectLesson/>}
    </div>
  )
}*/

/*import UseRefLesson from './UseRef';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseRefLesson/>}
    </div>
  )
}*/

/*import MemoLesson from './Hoc_memo';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <MemoLesson/>}
    </div>
  )
}*/

/*import UseCallbackLesson from './UseCallback';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseCallbackLesson/>}
    </div>
  )
}*/

/*import UseMemoLesson from './UseMemo';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseMemoLesson/>}
    </div>
  )
}*/

/*import UseReducerLesson from './UseReducer';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseReducerLesson/>}
    </div>
  )
}*/

/*import UseContextLesson from './UseContext/UseContext'
import { ThemeProvider } from './UseContext/ThemeContext'
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <ThemeProvider>
        <UseContextLesson/>
        </ThemeProvider>}
    </div>
  )
}*/

/*import TodoApp from './TodoApp'
import { StoreProvider } from './Store';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <StoreProvider>
          <TodoApp/>
        </StoreProvider>}
    </div>
  )
}*/

/*import UseImperativeHandleLesson from './UseImperativeHandle'
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseImperativeHandleLesson/>}
    </div>
  )
}*/

// Development: npm start/yarn start -> CSS internal
// Production: npm run build/yarn build -> CSS external
//             npm serve -s build
// CSS s??? b??? ???nh h?????ng n???u t??n class trong c??c component tr??ng nhau
// S??? d???ng CSS module x??? l??
// - ?????i ??u??i file Paragraph.css -> Paragraph.module.css -> webpack x??? l?? export ra m???t object styles
// - Kh??ng s??? d???ng CSS cho tagName
// - C?? th??? t???o GlobalStyles ????? CSS cho m???t s??? th??nh ph???n s??? d???ng cho to??n trang 
/*import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import GlobalStyles from './components/GlobalStyles'
function App() {
  return (
    <GlobalStyles>
      <div style={{padding: 20}}>    
        <Heading/>
        <Paragraph/>
      </div>
      <div className='d-flex'>
        <div>Item 1</div>
        <div>Item 2</div>
      </div>     
    </GlobalStyles>
  )
}*/

/*import Button from './components/Button'
function App() {
  return (
    <div style={{padding: 20}}>
        <>
          <Button/>
          <Button primary/>
          <Button primary disabled/>
        </>
    </div>
  )
}*/

/*import {BrowserRouter as Router} from 'react-router-dom'
import PageRouter from './PageRouter'
function App() {
  return (
    <Router>
      <PageRouter/>
    </Router>
  )
}*/

// Learn Sass
import Sass from './LearnSass/Sass'
function App() {
  return (
    <div style={{padding: 20}}>
        <>
          <Sass/>
        </>
    </div>
  )
}

export default App;
