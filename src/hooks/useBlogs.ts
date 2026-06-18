"use client";

import { useEffect, useState } from "react";
import { fetchBlogs, fetchBlogBySlug, type ApiBlog } from "@/lib/api";

export function useBlogs() {
    const [data, setData] = useState<ApiBlog[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        setIsLoading(true);
        fetchBlogs()
            .then((blogs) => {
                if (!cancelled) {
                    setData(blogs);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!cancelled) setError(err);
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            });
        return () => { cancelled = true; };
    }, []);

    return { data, isLoading, error };
}

export function useBlog(slug: string) {
    const [data, setData] = useState<ApiBlog | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        if (!slug) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        fetchBlogBySlug(slug)
            .then((blog) => {
                if (!cancelled) {
                    setData(blog);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!cancelled) setError(err);
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            });
        return () => { cancelled = true; };
    }, [slug]);

    return { data, isLoading, error };
}
