//starting template :->
//Middleware 1 : redirecting about page to -> '/' || displaying json data instead of running the about page at its url..!
// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.json({message: "Hello from about page..!"})
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below to learn more
// //this matcher helps to match the url to which you want to redirect or modify request for that url
// export const config = {
//   matcher: '/about/:path*',
// }


//redirect and reewrite : -->
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}