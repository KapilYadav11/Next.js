import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message:"404 page not found"
    })
}