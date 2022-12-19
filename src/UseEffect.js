import { useEffect, useState } from "react"

//useEffect(callback) ===== Update DOM: F8 blog title------------------------------------------------------------------------------------
/*function UseEffectLesson(){
    const [title, setTitle] = useState('')
    useEffect(() => {
        document.title = title
    })
    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}*/

//useEffect(callback, []) ===== Call API-------------------------------------------------------------------------------------------------
/*function UseEffectLesson(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, []) // Trong trường hợp không truyền chuỗi [], thì sẽ gọi API liên tục 
    
    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}*/

//useEffect(callback, [deps]) ===== Call API---------------------------------------------------------------------------------------------
/*const tabs = ['posts', 'comments', 'albums']
function UseEffectLesson(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type]) 
    
    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}*/

//useEffect(callback, []) ===== Listener DOM events (Scroll)
// Khi add event ở window, khi mounted sự kiện được gọi, khi unmounted sự kiện không bị hủy đi
// mà vẫn nằm trong bộ nhớ, khi mounted trở lại sẽ gọi mới lại một lần nữa dẫn đến rò rỉ bộ nhớ
/*const tabs = ['posts', 'comments', 'albums']
function UseEffectLesson(){
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])
    
    useEffect(() => {
        const handleScroll = () => {
            //setShowGoToTop(window.scrollY >= 200)
            if (window.scrollY >= 200){
                setShowGoToTop(true)
            } else{
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll) 
        console.log('add')
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('remove')
        }
    }, [])
    
    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
            ))}
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 50,
                        bottom: 50
                    }}
                >
                    Go to Top
                </button>
            )}
        </div>
    )
}*/


//useEffect(callback, []) ===== Listener DOM events (Resize)-------------------------------------------------------------------------
/*function UseEffectLesson(){
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        console.log('add')

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('remove')
        }
    }, [])
    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}*/


//useEffect(callback, [deps]) ===== Listener timer----------------------------------------------------------------------------------------
/*function UseEffectLesson(){
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCountdown(countdown - 1) // setInterval dùng callback và []
        }, 1000)
        return () => clearTimeout(timerId)
    }, [countdown])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}*/
function UseEffectLesson(){
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
            console.log('countdown...')
        }, 1000)
        return () => clearInterval(timerId)
    }, [])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}


//useEffect(callback, [deps]) ===== PreviewImage-----------------------------------------------------------------------------------------
/*function UseEffectLesson(){
    const [image, setImage] = useState()

    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview)
        }
    }, [image])

    const handlePreviewImage = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        
        setImage(file)
        e.target.value = null
    }
    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewImage}
            />
            {image && (
                <img src={image.preview} alt="" width="80%"/>
            )}
        </div>
    )
}*/


//useEffect(callback, [deps]) ===== Subcribe/unsubcribe----------------------------------------------------------------------------------
//emitComment from index.js
/*const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]
function UseEffectLesson(){
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    
    
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 
                            'red' : 
                            '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}*/

export default UseEffectLesson
