import { NextResponse } from "next/server";
import { getBlogBySlug } from "@/lib/orchestrator";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const blog = await getBlogBySlug(slug);
        if (!blog) {
            return NextResponse.json(
                { error: "Blog not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(blog);
    } catch (error) {
        console.error("[API Proxy] Blog by slug error:", error);
        return NextResponse.json(
            { error: "Failed to fetch blog" },
            { status: 500 }
        );
    }
}
