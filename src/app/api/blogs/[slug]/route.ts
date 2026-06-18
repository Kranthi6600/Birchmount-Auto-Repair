import { NextResponse } from "next/server";

const CLIENT_ID = "1910ea08-b8ae-4968-8e69-c9b7c5e7bc78";
const API_BASE = "https://wehoware-saas.vercel.app";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const url = `${API_BASE}/api/public/blogs/${slug}?clientId=${CLIENT_ID}`;
        const res = await fetch(url, {
            headers: { Accept: "application/json" },
        });
        if (!res.ok) {
            return NextResponse.json(
                { error: res.statusText },
                { status: res.status }
            );
        }
        const data = await res.json();
        const blog = data?.blog ?? data;
        return NextResponse.json(blog);
    } catch (error) {
        console.error("[API Proxy] Blog by slug error:", error);
        return NextResponse.json(
            { error: "Failed to fetch blog" },
            { status: 500 }
        );
    }
}
