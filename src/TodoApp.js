import { useStore, actions } from './Store'

function TodoApp() {
    //const [state, dispatch] = useContext(StoreContext)
    const [state, dispatch] = useStore()
    const { todoInput, todos } = state

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
    }

    console.log('todoinput: ', todoInput)
    return (
        <>
            <input
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </>
    )
}

export default TodoApp