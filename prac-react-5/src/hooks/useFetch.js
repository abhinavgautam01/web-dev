import { useState, useEffect } from "react";
// export function usePost(){
//     const [post, setPost] = useState({})
    
//     async function setPosts() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const post = await response.json()
//         setPost(post)
//     }
//     useEffect(()=>{
//         setPosts();
//     }, [])
//     return post;
// }

export function useFetch(url){
    const [finalData, setFinalData] = useState({})
    const [loading, setLoading] = useState(true)

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json()
        setFinalData(json)
        setLoading(false);
    }

    useEffect(()=> {
        getDetails();
    }, [url])

    return {
        finalData, 
        loading
    }
}