import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";
const JWT_SECRET = "SECRET"
export async function POST(req: NextRequest){

    const body = await req.json()
    const username = body.username;
    const password = body.password

    const user_id = 1;

    const token = jwt.sign({
        user_id
    }, JWT_SECRET)

    return NextResponse.json({
        token
    })
}