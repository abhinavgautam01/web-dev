"use client"
//by default in nextJs every page is server based..!
import Image from "next/image";
import { useSearchParams } from "next/navigation";

//to use these hooks you first have to convert the pages into client based pages
//usePathname hook (Navbar) : it is used to know current path or we can say in which route you are currently in ..!
//useParams (blogpost) : it is a client component hook that lets you read a route's dynamic params filled in by the current URL..!
//useRouter (blogpost) : the useRouter hook allows you to programmatically change routes inside client components..!
//useSearchParams : it is a client component hook that lets you read the current URL's query string.

export default function Home() {
  const searchParams = useSearchParams()
  return (
    <div>
      Hey this is or page and blog is {searchParams.get('blog')} and utm source is {searchParams.get('utm_source')}
      {/* http://localhost:3000/?blog=golu&utm_source=github */}
    </div>
  );
}
