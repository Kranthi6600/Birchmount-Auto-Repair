import { NextResponse } from "next/server";
import { getBlogs } from "@/lib/orchestrator";
import { DEFAULT_BLOG_PAGE_SIZE } from "@/lib/config";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || DEFAULT_BLOG_PAGE_SIZE;

        const result = await getBlogs(page, limit);
        return NextResponse.json(result);
    } catch (error) {
        console.error("[API Proxy] Blogs error:", error);
        return NextResponse.json(
            { error: "Failed to fetch blogs" },
            { status: 500 }
        );
    }
}
