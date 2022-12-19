import { useState, useMemo, useRef } from "react";

function UseMemoLesson(){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])

        // clear sau khi nhap input
        setName('')
        setPrice('')

        // focus sau khi clear
        nameRef.current.focus()
    }
    // Sử dụng useMemo để giải quyết trường hợp nhập input chưa add nhưng vẫn 'tinh toan lai...'
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('tinh toan lai...')
            return result + prod.price
        }, 0)
        return result
    }, [products])
    return (
        <>
            <input
                ref={nameRef}
                value={name}
                placeholder='Enter name...'
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <input
                value={price}
                placeholder='Enter price...'
                onChange={e => setPrice(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit}>Add</button>
            <br/>
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </>
    )
}

export default UseMemoLesson