"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome/>
    </SessionProvider>
  );
}
function RealHome(){
  const session = useSession()
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {session.status === "authenticated" && <button className="cursor-pointer border-2 border-red-600" onClick={()=>signOut()}>Logout</button>}
      {session.status === "unauthenticated" && <button className="cursor-pointer border-2 border-red-600" onClick={()=>signIn()}>SignIn</button>}
    </div>
  )
}