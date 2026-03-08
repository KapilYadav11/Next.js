import { log } from "console";
import { NextRequest } from "next/server";

export async function POSZT(req:NextRequest) {
    const data = await req.json();

    console.log(data)

    return NextRequest.json({
        message: "You have signed up "
    })
}