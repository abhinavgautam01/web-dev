"use client"
import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input";

export default function Home() {
  return (
    <div>
      <InputBox placeholder="Enter Room Id" size="big"/>
      <Button>Join Room</Button>
    </div>  
  );
}
