import { useState, useEffect, useCallback, useRef } from "react";
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

export function useCounter() {
  const [count, setCount] = useState(0)

  function increase_count(){
    setCount(count + 1);
  }

  return {
    count,
    increase_count
  }
}

export function useFetch(url, retryTime) {
  const [finalData, setFinalData] = useState(null);
  const [loading, setLoading] = useState(true);

  // stable fetch function that always sees the latest `url`
  const fetchData = useCallback(async (showLoading = false) => {
    if (showLoading) {
        setLoading(true);
    }
    try {
      const response = await fetch(url);
      const json = await response.json();
      setFinalData(json);
    } catch (err) {
      console.error("useFetch error:", err);
    } finally {
      if (showLoading) {
        setLoading(false);
      }
    }
  }, [url]);

  // initial fetch when url changes (show loading)
  useEffect(() => {
    fetchData(true);
  }, [fetchData]);

  // polling effect — depends on url & retryTime so it updates when either changes
  useEffect(() => {
    if (!retryTime || retryTime <= 0) return;

    const id = setInterval(() => {
      // do background poll (don't toggle loading)
      fetchData(false);
    }, retryTime * 1000);

    return () => clearInterval(id); // cleanup on url/retryTime change or unmount
  }, [fetchData, retryTime]);

  return { finalData, loading };
}
// effect occurs after returning the value...!
export function usePrev(value){
    const prev = useRef()

    useEffect(()=>{
        prev.current = value
    }, [value])
    return prev.current;
}

export function useDebounce(de_bounce_function){
    const currentClock = useRef()

    const debouncedfn = ()=> {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(de_bounce_function, 300)
    }

    return debouncedfn
}

export function useDebounceSecondImplementation(value, delay){
    const [debouncedValue, setDebouncedValue] = useState();

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay)

        return ()=>{
            clearTimeout(handler)
        };
    }, [value, delay])

    return debouncedValue;
}