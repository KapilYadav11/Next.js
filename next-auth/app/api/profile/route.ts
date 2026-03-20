import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){
    return NextResponse.json({
        avatarUrl: "http://google.com/cat.png"
    })
}