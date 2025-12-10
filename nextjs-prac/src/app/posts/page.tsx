import axios from "axios"

async function getPosts(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")   
    return response.data
}

export default async function Posts(){
    const posts = await getPosts()
    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    )
}