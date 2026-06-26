import { NextResponse } from "next/server";

const CLIENT_ID = "1910ea08-b8ae-4968-8e69-c9b7c5e7bc78";
const API_BASE = "https://wehoware-saas.vercel.app";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page") || "1";
        const limit = searchParams.get("limit") || "6";

        const url = `${API_BASE}/api/public/blogs?clientId=${CLIENT_ID}&page=${page}&limit=${limit}`;
        const res = await fetch(url, {
            headers: { Accept: "application/json" },
        });
        if (!res.ok) {
            return NextResponse.json(
                { error: res.statusText },
                { status: res.status }
            );
        }
        const raw = await res.json();
        const blogs = raw.blogs ?? raw.data ?? [];
        return NextResponse.json({
            data: blogs,
            pagination: raw.pagination ?? {
                totalItems: blogs.length,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(blogs.length / Number(limit)),
            },
        });
    } catch (error) {
        console.error("[API Proxy] Blogs error:", error);
        return NextResponse.json(
            { error: "Failed to fetch blogs" },
            { status: 500 }
        );
    }
}
