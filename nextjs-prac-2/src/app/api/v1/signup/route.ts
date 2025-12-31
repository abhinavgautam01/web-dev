import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data)
    await prisma.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })
  return NextResponse.json({ message: "Signed up successfull" });
}
