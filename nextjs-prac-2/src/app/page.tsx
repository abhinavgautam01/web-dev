import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg flex items-center justify-center w-screen h-screen">
      <div className="flex-col">
        <div className="font-bold">Todo Application</div>
        <div className="flex-col">
          <div className="border-2 rounded-xl m-2">
            <Link className="text-md p-2" href={"/signup"}>Sign Up</Link>
          </div>
          <div className="border-2 rounded-xl m-2">
            <Link className="text-md p-2" href={"/signin"}>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
