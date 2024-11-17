"use client"
import Image from "next/image";

// next.config.mjs : strict mode
//priority : .env.local variables has more priority than .env variables
//process.env does not load on client-side..!

export default function Home() {
  //on client side it will log as undefined..!
  // console.log("The id is : ", process.env.ID)
  // console.log("The secret is : ", process.env.SECRET)

  //now id and secret will be accessible on the client side...
  // console.log("The id is : ", process.env.NEXT_PUBLIC_ID)
  // console.log("The secret is : ", process.env.NEXT_PUBLIC_SECRET)
  return (
    <div>
    <div>
      Hey this is a homepage.... and id is : {process.env.ID} and the secret is : {process.env.SECRET}
    </div>
    {/* <div>
      Hey this is a homepage.... and id is : {process.env.NEXT_PUBLIC_ID} and the secret is : {process.env.NEXT_PUBLIC_SECRET}
    </div> */}
    </div>
  );
}
