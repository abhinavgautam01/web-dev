"use client"
//http://localhost:3000/api/auth/callback/github
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in using github</button>
      <br />
      <button onClick={() => signIn("google")}>Sign in using google</button>
    </>
  )
}