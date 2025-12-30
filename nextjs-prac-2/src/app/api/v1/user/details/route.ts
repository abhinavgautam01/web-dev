import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name: "Golu",
        email: "golu@gmail.com"
    })
}

export function POST(){
    return NextResponse.json({
        name: "Golu",
        email: "golu@gmail.com"
    })
}

export function PUT(){
    return NextResponse.json({
        name: "Golu",
        email: "golu@gmail.com"
    })
}