import Image from "next/image";

//by default in nextJs any component is server component ; we can switch it to client component by "use client"
//data fetching (in nextJS) :->
// 1. SSR (Server-Side Rendering) : (default behaviour) things/components which are rendering on server
// 2. SSG (Static Site Generation) : Any content which does not have network calls is a static page by default...(when you build : static pages are rendered) //static pages mean it will not change the response again and again ...it will re-validate after given time(3600 seconds)
// 3. ISR (Incremental Static Regenaration) : when you want your page to change within a time period (like 60 seconds..!) ; like once you have fetched data from api , it is is cached in your memory, then you want to re-validate the data after a certain time period

export default async function Home() {
  //in the previous version of nextJs once the fetch is used...the data which is fetched is stored in cache..so even if the data is changed after fetching ...it will show you the previous data at your page(after refreshiing the page also)
  // In previous versions of Next.js, using fetch would have a default cache value of force-cache. This changed in version 15, to a default of cache: no-store.

  //now to store data in cache you can use : 
  // let data = await fetch('https://api.vercel.app/blog', {cache: 'force-cache'})

  // let data = await fetch('https://api.vercel.app/blog')
  let data = await fetch('https://api.vercel.app/blog', {next: {revalidate : 3600}}) //SSG
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

//To prevent the page from prerendering, we can add the following to our file
// export const dynamic = 'force-dynamic'  //ISR
// Adding dynamic = 'force-dynamic' ensures that the page doesn't use any static optimization, meaning the page is always server-rendered.
// Use this if the page content frequently changes and shouldn't rely on caching.