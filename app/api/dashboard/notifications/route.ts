import { NextResponse } from "next/server";
import {db} from "@/lib/db";

export async function GET() {
  try {
    const notifications = await db.notification.findMany({
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ notifications });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load notifications" },
      { status: 500 }
    );
  }
}