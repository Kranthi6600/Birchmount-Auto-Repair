import { NextResponse } from "next/server";
import { getServiceFaqs } from "@/lib/orchestrator";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const data = await getServiceFaqs(slug);
        return NextResponse.json(data);
    } catch (error) {
        console.error("[API Proxy] FAQs error:", error);
        return NextResponse.json(
            { error: "Failed to fetch FAQs" },
            { status: 500 }
        );
    }
}
