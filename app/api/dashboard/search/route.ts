import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get("q") || "";

        if (!query) {
            return NextResponse.json({ results: [] });
        }
        const results = await db.product.findMany({
            where: {
                name: { contains: query, mode: "insensitive" }
            }
        });

        return NextResponse.json({ results });
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
