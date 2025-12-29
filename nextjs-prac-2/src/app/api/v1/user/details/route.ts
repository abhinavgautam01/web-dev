import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name: "Golu",
        email: "golu@gmail.com"
    })
}