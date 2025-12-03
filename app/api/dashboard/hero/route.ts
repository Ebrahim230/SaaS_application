'use server'
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
export async function GET() {
    const weeklyData = await db.sales.findMany({
        orderBy: { date: "asc" },
        take: 6,
    });
    const totalSales = await db.sales.aggregate({
        _sum: { amount: true },
    });

    const totalOrders = await db.order.count();
    const productsSold = await db.product.count();
    const newCustomers = await db.customer.count();

    return NextResponse.json({
        chart: weeklyData.map((d) => ({
            name: d.day, 
            Volume: d.volume,
            Service: d.service,
        })),
        summary: {
            totalSales: totalSales._sum.amount || 0,
            totalOrders,
            productsSold,
            newCustomers,
        },
    });
}