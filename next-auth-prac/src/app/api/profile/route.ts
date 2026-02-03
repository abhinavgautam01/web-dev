import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        avtarurl: "http://image.com/cat.png"
    })
}