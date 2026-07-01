import { NextResponse } from "next/server";
import { getServices } from "@/lib/orchestrator";

export async function GET() {
    try {
        const data = await getServices();
        return NextResponse.json(data);
    } catch (error) {
        console.error("[API Proxy] Services error:", error);
        return NextResponse.json(
            { error: "Failed to fetch services" },
            { status: 500 }
        );
    }
}
