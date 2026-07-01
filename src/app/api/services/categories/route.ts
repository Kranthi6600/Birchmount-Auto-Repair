import { NextResponse } from "next/server";
import { getServiceCategories } from "@/lib/orchestrator";

export async function GET() {
    try {
        const data = await getServiceCategories();
        return NextResponse.json(data);
    } catch (error) {
        console.error("[API Proxy] Service categories error:", error);
        return NextResponse.json(
            { error: "Failed to fetch service categories" },
            { status: 500 }
        );
    }
}
