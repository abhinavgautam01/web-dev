import Image from "next/image";

//Express middleware : Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
//basic defination of middleware : It is used to modify/manipulate request before it reaches to its destination...!
//Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

//redirect : it redirects to a particular url..!
//rewrite : it redirects to a particular url...without changing the url..!

export default function Home() {
  return (
    <div>
      Hello
    </div>
  );
}
