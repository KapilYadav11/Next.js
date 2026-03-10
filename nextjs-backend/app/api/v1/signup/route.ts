import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// ✅ Global singleton (fixes multiple connections)
const globalForPrisma = globalThis as unknown as { 
  prisma: PrismaClient 
};

// Create pool and adapter ONCE
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL! 
});
const adapter = new PrismaPg(pool);

// ✅ Single Prisma instance
const prismaClient = globalForPrisma.prisma ?? new PrismaClient({ 
  adapter 
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prismaClient;
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data);

    try {
        await prismaClient.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        });

        return NextResponse.json({
            message: "You have signed up successfully"
        });
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json(
            { error: "Signup failed" }, 
            { status: 500 }
        );
    }
}
