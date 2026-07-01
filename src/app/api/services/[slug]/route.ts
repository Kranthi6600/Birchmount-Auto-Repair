import { NextResponse } from "next/server";
import { getServiceBySlug } from "@/lib/orchestrator";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const service = await getServiceBySlug(slug);
        if (!service) {
            return NextResponse.json(
                { error: "Service not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(service);
    } catch (error) {
        console.error("[API Proxy] Service by slug error:", error);
        return NextResponse.json(
            { error: "Failed to fetch service" },
            { status: 500 }
        );
    }
}
