import axios from "axios"

async function getTodos(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")   
    return response.data
}

interface ITodo {
    title: string,
    completed: boolean
}

function Todo({title, completed}: ITodo){
    return (
        <div>
            {title} {completed ? "done" : "not done!"}
        </div>
    )
}

export default async function Todos(){
    const todos = await getTodos()
    return (
        <div>
            {/*@ts-ignore*/}
            {todos.map(todo=><Todo key={todo.title} title={todo.title} completed={todo.completed} />)}
        </div>
    )
}