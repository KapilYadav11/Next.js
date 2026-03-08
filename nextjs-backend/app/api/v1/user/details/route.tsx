import { NextResponse } from "next/server";


export function GET(){
    return NextResponse.json({
        name: "Kapil",
        email: "kapilyadav@gmail.com"
    })
}