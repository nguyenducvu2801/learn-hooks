import {useState} from 'react'

/*function UseStateLesson(){
    const [counter, setCounter] = useState(1)
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
        
    )
}*/

// setState với callback
/*function UseStateLesson(){
    const [counter, setCounter] = useState(1)
    const handleIncrease = () => {
        setCounter(prevState => prevState + 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
        
    )
}*/

// initState với callback: không lấy hàm làm initState mà sử dụng hàm để return ra giá trị và lấy giá trị đó làm initState
// Trong trường hợp initState là logic tính toán, truyền callback vì initState chỉ render lần đầu
/*const orders = [100, 200, 300]
function UseStateLesson(){
    
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur)
        console.log(total)
        return total
    })
    const handleIncrease = () => {
        setCounter(prevState => prevState + 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
        
    )
}*/

// setState là thay thế state bằng giá trị mới
// Để thêm hooby vào thì sử dụng spread rải phần tử
/*function UseStateLesson(){
    const [info, setInfo] = useState({
        name: 'Nguyen Van A',
        age: 18,
        address: 'Ha Noi'
    })
    const handleUpdate = () => {
        // setInfo({
        //     ...info,
        //     hooby: 'football'
        // })
        // Hoặc truyền callback trong trường hợp xử lý logic
        setInfo(prev => {
            // logic...
            return {
                ...prev,
                hooby: 'football'
            }
        })
    }
    return (
        <div>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
        
    )
}*/

// Example

// 1. Random gift
/*const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard']
function UseStateLesson(){
    const [gift, setGift] = useState()
    const ranDomGift = () => {
        const index = Math.floor(Math.random()*gifts.length)
        setGift(gifts[index])
    }
    return (
        <div>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={ranDomGift}>Lấy thưởng</button>
        </div>
    )
}*/

// 2. Two-way binding: ràng buộc hai chiều
//    Từ UI sửa thông tin cập nhật đến component gọi là One-way binding
//    Và cập nhật thông tin trong component và UI cũng cập nhật gọi là Two-way binding

/*function UseStateLesson(){
    const [name, setName] = useState('')
    
    return (
        <div>
            <input 
                value={name} // thể hiện two-way binding
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setName('Nguyen Van B')}>Change</button>
        </div>
    )
}*/

/*function UseStateLesson(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        // Call API
        console.log({
            name,
            email
        })
    }
    
    return (
        <div>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}*/

/*const courses = [
    {
        id: 1, 
        name: 'HTML, CSS'
    },
    {
        id: 2, 
        name: 'Javascript'
    },
    {
        id: 3, 
        name: 'ReactJS'
    }
]
function UseStateLesson(){
    const [checked, setChecked] = useState(1)

    const handleSubmit = () => {
        // Call API
        console.log({id: checked})
    }
    
    return (
        <div>
            {courses.map(course => ( // đặt name chung cho các thẻ input thì chọn 1 nhưng chỉ thay đổi UI còn về dữ liệu thì không
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    /> 
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}*/

const courses = [
    {
        id: 1, 
        name: 'HTML, CSS'
    },
    {
        id: 2, 
        name: 'Javascript'
    },
    {
        id: 3, 
        name: 'ReactJS'
    }
]
function UseStateLesson(){
    const [checked, setChecked] = useState([])

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if (isChecked){
                return checked.filter(item => item !== id)
            } else{
                return [...prev, id]
            }
        })
    }
    const handleSubmit = () => {
        // Call API
        console.log({id: checked})
    }
    
    return (
        <div>
            {courses.map(course => ( 
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    /> 
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}


// 3. Todolist

/*function UseStateLesson(){
    
    const [job, setJob] = useState('')
    //const [jobs, setJobs] = useState( storageJobs ?? []) // storageJobs === null hoặc undefined thì lấy giá trị sau
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        if (storageJobs !== null && storageJobs !== ''){
            return storageJobs
        } else if (storageJobs === null | storageJobs === ''){
            return []
        }
        
    })
    const handleSubmit = () => {
        // Hiển thị ra UI
        //setJobs(prev => [...prev, job])

        //Hiển thị và lưu vào localStorage
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })

        setJob('')
    }
    
    return (
        <div>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}*/
export default UseStateLesson